var path = require('path');

var gulp = require('gulp'), //自动化工具
	cssmin = require('gulp-mini-css'), //压缩css文件
	htmlmin = require('gulp-htmlmin'), //压缩html文件
	uglify = require('gulp-uglify'), //压缩js文件
	pump = require('pump');
	concat = require('gulp-concat'); //拼接文件

var webpack = require('webpack'),
	webpackDevServer = require('webpack-dev-server'),
	webpackConfig = require('./webpack.config.dev.js');

// gulp.task('min-js',function(){
// 	pump([
// 		gulp.src(['../src/**/*.js']),
// 		uglify(),
// 		gulp.dest("../releas/js")
// 	]);
// });
// gulp.task('min-css',function(){
// 	gulp.src('../src/**/*.css')
// 		.pipe(cssmin())
// 		.pipe(gulp.dest('../release/styles'));
// });
// gulp.task('min-html',function(){
// 	gulp.src('../src/**/*.html')
// 		.pipe(htmlmin())
// 		.pipe(gulp.dest('../release/html'));
// });

gulp.task('concat-lib',function(){
	gulp.src(['../lib/vue/dist/vue.min.js','../lib/vue-router/dist/vue-router.min.js'])
		.pipe(concat('vue.min.js'))
		.pipe(gulp.dest('../release'))
});

gulp.task('webpack-dev',['concat-lib'],function(){
	var config = Object.create(webpackConfig);
	config.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/",
			"webpack/hot/dev-server");
	config.plugins.push(new webpack.HotModuleReplacementPlugin());//热替换插件
	// config[watch] = true;
	var compiler = webpack(config);
	var server = new webpackDevServer(compiler,{
		contentBase:'../',
		publicPath:'/release/',
		hot:true,
		stats:{colors:true}
	});
	server.listen(8080,"localhost",function(){});
});