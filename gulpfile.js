// ###########################################################
// ################### BUILD DEPENDENCIES ####################
// ###########################################################

var gulp = require('gulp');
var webpack = require('webpack');
var DeepMerge = require('deep-merge');
var path = require('path'); // node utility to work with paths
var del = require('del'); // node utility to delete files
var express = require('express');
var fs = require ("fs");


// ###########################################################
// ####################### GULP SETUP ########################
// ###########################################################

var app = express();
var packageInfo = require(path.join(__dirname, 'package.json'));
var configPath = path.join(__dirname, 'script/config.json');
var config = require(configPath);

var MODULE_ID = packageInfo.name;
var standAloneBuildFolder = MODULE_ID + '_standalone';
var moduleBuildFolder = MODULE_ID + '_module';
var standAloneFullPath = path.join(__dirname, standAloneBuildFolder);
var moduleFullPath = path.join(__dirname, moduleBuildFolder);
var scriptsFullPath = path.join(__dirname, 'script');

var deepmerge = DeepMerge(function (target, source, key) {
    if (target instanceof Array) {
        return [].concat(target, source);
    }
    return source;
});

function overrideDefaultConfigWith(overrides) {
    return deepmerge(defaultConfig, overrides || {});
}


// ######################################################
// ################### WEBPACK CONFIG ###################
// ######################################################

var defaultConfig = {
    devtool: 'source-map',
    resolve: {
        root: [__dirname, scriptsFullPath],
        modulesDirectories: ['node_modules'],
        alias: {
            //Config: __dirname + '/dev/src/config', //__dirname is used to localize the project folder
            data    : path.join(__dirname, 'script/data'),
            game    : path.join(__dirname, 'script/game'),
            sounds  : path.join(__dirname, 'script/sounds'),
            states  : path.join(__dirname, 'script/states'),
            ui      : path.join(__dirname, 'script/ui'),
            config  : path.join(__dirname, 'script/config.json')
        }
    },
    module: {
        loaders: [
            { test: /pixi.js/, loader: 'script' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.png$/, loader: 'file-loader' },
            { test: /\.glsl$/, loader: 'shader' },
            { test: /\.txt/, loader: 'raw-loader' },
            { test: /\.json/, loader: 'json-loader' },
            { test: /\.yml/, loader: 'yaml-loader' }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({ // the plugin is a wrapper for libraries and objects we need in all the modules, so we don't need to require them all the time
            Config: 'config',
        })
    ]
};

var standAloneConfig = overrideDefaultConfigWith({ // This config allows you to test your project stand-alone, with a dummy set of data
    resolve : {
        alias : {
            'phaser': path.join(__dirname, 'libraries/phaser-bundle')
        },
    },
    plugins:[
        new webpack.ProvidePlugin({ // the plugin is a wrapper for libraries and objects we need in all the modules, so we don't need to require them all the time
            Phaser: 'phaser',
        })
    ],
    entry: path.join(scriptsFullPath, 'launcher.js'),
    output: {
        path: standAloneFullPath,
        filename: MODULE_ID + '.js'
    }
});

var moduleConfig = overrideDefaultConfigWith({ // This config is to be used when the game is ready, to generate the module to include in Kalulu.
    entry: path.join(scriptsFullPath, 'game.js'),
    output: {
        path: path.join(__dirname, MODULE_ID),
        filename: MODULE_ID + '.js',
        library: MODULE_ID,
        libraryTarget: "amd"
    }
});

// ##################################################
// ################### GULP TASKS ###################
// ##################################################

gulp.task('default', ['watch_std'], function () {
    // the default task is run when gulp is called alone in the console. We require the watch_std task to be run in the task definition.
    console.log("Gulp is Watching You...");
});

gulp.task('clean', function (done) {
    console.log("Cleaning " + MODULE_ID + " App...");

    return del([
        standAloneBuildFolder,
        moduleBuildFolder
    ]);
});


// BUILD STAND-ALONE

gulp.task('build_std', ['clean'], function (done) {
    
    console.log("##############################################################################");
    console.log("BUILDING OF " + standAloneBuildFolder + " APP, STAND-ALONE VERSION");
    console.log("##############################################################################");

    updateAssetPath("standalone");

    gulp.src(['assets/**/**']).pipe(gulp.dest(standAloneBuildFolder + '/assets'));
    gulp.src(['libraries/**/**'])/*.pipe(updater)*/.pipe(gulp.dest(path.join(standAloneBuildFolder, 'libraries')));
    gulp.src(['index.html'])/*.pipe(updater)*/.pipe(gulp.dest(standAloneBuildFolder));

    webpack(standAloneConfig).run(onBuild(done));
});

gulp.task('watch_std', ['build_std'], function () {
    app.use(express.static(standAloneFullPath));
    app.get('/', function () {});
    app.listen(3040, function () {});
    gulp.watch([scriptsFullPath + '/**/**'], ['build_std']);
});


// BUILD MODULE

gulp.task('build_mod', ['clean'], function (done) {

    console.log("##############################################################################");
    console.log("BUILDING OF " + MODULE_ID.toUpperCase() + " APP, MODULE VERSION");
    console.log("##############################################################################");
    
    updateAssetPath("module");

    gulp.src(['assets/**/**']).pipe(gulp.dest(MODULE_ID + '/assets'));
    
    webpack(moduleConfig).run(onBuild(done));
});

gulp.task('watch_mod', ['build_mod'], function () {
    
    app.use(express.static('./' + MODULE_ID));
    app.get('/', function () { });
    app.listen(3040, function () { });
    gulp.watch(['dev/**/**'], ['build_mod']);
});

// #################################################
// ################### FUNCTIONS ###################
// #################################################


function onBuild(done) {
    return function (err, stats) {
        if (err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
            console.log("##############################################################################");
            console.log("THE " + MODULE_ID.toUpperCase() + " APP HAS BEEN BUILT. GO TO 'http://localhost:3040' to try it !");
            console.log("##############################################################################");
        }

        if (done) {
            done();
        }
    };
}

function updateAssetPath (buildType) {
    
    console.log("config updated for build type <" + buildType + ">");
    if (buildType === "standalone") {
        config.assetsPath = config.standaloneBuildAssetsPath;
        config.debugButton = true;
        config.exportButton = false;
    }
    else if (buildType === "module") {
        config.assetsPath = config.moduleBuildAssetsPath;
        config.debugButton = false;
        config.exportButton = false;
    }
    
    fs.writeFileSync(configPath, JSON.stringify(config));
}