//webpack 会自动根据entry入口文件中的依赖关系来打包成单个js文件，输出到配置文件中指定的output-path中
var path = require('path');//路径处理，nodejs的内置模块

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');//导入web pack
var webpackExtract = require('extract-text-webpack-plugin');//从单个bundle.js文件中分离出css样式文件部分
var cssExtract = new webpackExtract('[name].[chunkhash:8].css');//要配置相应hash值，方便引用
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin; //自动分析重用的模块并打包成独立文件

module.exports = {
	entry:{ //定义入口文件
		'index':['../src/main.js']
	},
	output:{ //定义输出路径，并指定输出文件的名字
		path:path.resolve(__dirname,'../release'),
		publicPath:'/release/',
		filename:'[name].bundle.js'
	},
	module:{ //定义各文件格式相应的加载器，要用npm下载相应的插件
		loaders:[
			{'test':/\.vue$/,loader:'vue'},
			{'test':/\.(html|tpl)$/,loader:'html'},
			{'test':/\.js$/,loader:'babel',exclude:/node_modules/},
			{'test':/\.css$/,loader:cssExtract.extract('style-loader','css-loader','autoprefixer')},//自动为css3添加各浏览器
			{'test':/\.scss$/,loader:cssExtract.extract('style-loader','css-loader','sass-loader','autoprefixer')},
			{'test':/\.(png|jpg|gif)$/,loader:'url-loader?limit=8192'}
		]
	},
	vue:{ //vue要单独配置，没有也能正常运行
		loaders:{
			css:'style!css!autoprefixer',
		}
	},
	babel:{ //把js代码转换成ES6，从而可以使用ES6特性
		presets:['es2015'],
		plugins:['transform-runtime']
	},
	resolve:{ //其它配置，例如扩展名、标签，方便资源的调用
		extensions:['','.js','.vue'],
		alias:{
			// vue:'vue/dist/vue.js',
			// vuerouter:'vue-router/dist/vue-router.js'
			pages:path.resolve(__dirname,'../src/pages'),
			styles:path.resolve(__dirname,'../src/styles'),
			filters:path.resolve(__dirname,'../src/filters'),
			directives:path.resolve(__dirname,'../src/directives'),
			components:path.resolve(__dirname,'../src/components')
		}
	},
	plugins:[  //插件，用于其它额外功能
		cssExtract, //提取css样式部分的文件作单独一个文件
		// new CommonsChunkPlugin('common.js',['../src/main.js']) //提取模块中重复引用部分，并打包成独立文件
	],
	devtool: "source-map"
}