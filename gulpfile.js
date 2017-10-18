(function(){
	'use strict';

var config = require('./gulp.config')();

var gulp = require('gulp'),
	server = require('gulp-server-livereload'),
	eventStream = require('event-stream'),
	inject = require('gulp-inject'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	replace = require('gulp-replace'),
	mainBowerFiles = require('main-bower-files'),
	filter = require('gulp-filter'),
	angularFilesort = require('gulp-angular-filesort'),
	ngAnnotate = require('gulp-ng-annotate'),
	ngHtml2Js = require("gulp-ng-html2js"),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');


gulp.task('watch', startWatch);
gulp.task('webserver', startWebserver);
gulp.task('start', ['build'], startProject);
gulp.task('clear-dev', clearDev);
gulp.task('clear-prod', clearProd);
gulp.task('compile', compile);
gulp.task('dev', ['clear-dev', 'watch'], compile);
gulp.task('build', ['clear-prod'], buildProject);

function startWatch(){
	gulp.watch([
		config.sources.scripts,
		config.sources.stylesheets,
		config.sources.templates,
		config.sources.index], ['compile'] 
		);
}

function startWebserver(){
  gulp.src('dev')
    .pipe(server({
      livereload: true,
      open: true
}))
};

function startProject(){
  gulp.src('prod')
    .pipe(server({
      livereload: true,
      open: true
}))
};

function clearDev(){
	return del(config.dev.index);
};

function clearProd(){
	return del(config.prod.index);
};

function compile(){
	return eventStream.merge(
		devIndex(),
		devImages(),
		devLibs()			
	)
};

function devIndex(){
	return gulp.src(config.sources.index)
		.pipe(inject(devScripts(), {relative: true}))
		.pipe(inject(devStyles(), {relative: true}))
		.pipe(inject(devTamplates(), {relative: true, name: 'templates'}))
		.pipe(inject(devVendorScripts(), {relative: true, name: 'vendor'}))
		.pipe(inject(devVendorStyles(), {relative: true, name: 'vendor'}))
		.pipe(replace('../dev', ''))
		.pipe(gulp.dest(config.dev.index));			
};

function devImages(){
	return gulp.src(config.sources.images)
	.pipe(gulp.dest(config.dev.images));
};

function devLibs(){
	return gulp.src(config.sources.lib)
	.pipe(gulp.dest(config.dev.lib));
};

function devScripts(){
	return gulp.src(config.sources.scripts)
		.pipe(angularFilesort())
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dev.scripts));
};

function devTamplates(){
	return gulp.src(config.sources.templates)
		.pipe(ngHtml2Js({moduleName: 'templates'}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest(config.dev.templates))
};

function devStyles(){
	return gulp.src(config.sources.stylesheets)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(concat('app.css'))
		.pipe(gulp.dest(config.dev.stylesheets));
};

function devVendorScripts(){
	return gulp.src(mainBowerFiles())
		.pipe(filter('**/*.js'))
		.pipe(gulp.dest(config.dev.vendors))
}

function devVendorStyles(){
	return gulp.src(mainBowerFiles())
		.pipe(filter('**/*.css'))
		.pipe(gulp.dest(config.dev.vendors))
}

/*Build Project*/
function buildProject(){
	return eventStream.merge(
		buildIndex(),
		buildImages(),
		buildTamplates(),
		buildScripts(),
		buildStyles(),	
		buildVendorScripts(),
		buildVendorStyles()
	)
}

function buildIndex(){
	return gulp.src(config.dev.index + '/index.html')
		.pipe(gulp.dest(config.prod.index));			
};

function buildImages(){
	return gulp.src(config.dev.images + '/**/*')
	.pipe(gulp.dest(config.prod.images));
};

function buildScripts(){
	return gulp.src(config.dev.scripts + '/**/*.js')
		.pipe(angularFilesort())
		.pipe(uglify())
		.pipe(gulp.dest(config.prod.scripts));
};

function buildTamplates(){
	return gulp.src(config.dev.templates + '/**/templates.js')
		.pipe(gulp.dest(config.prod.templates))
};

function buildStyles(){
	return gulp.src(config.dev.stylesheets + '/**/*.css')
		//.pipe(concat('style.css'))
		.pipe(gulp.dest(config.prod.stylesheets))
};

function buildVendorScripts(){
	return gulp.src(mainBowerFiles())
		.pipe(filter('**/*.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.prod.vendors))
}

function buildVendorStyles(){
	return gulp.src(mainBowerFiles())
		.pipe(filter('**/*.css'))
		.pipe(gulp.dest(config.prod.vendors))
}


})();