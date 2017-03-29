// const path = require('path');
// const webpack = require('webpack');

// module.exports  = {
// 	entry: {
// 		main:'./app/index.js',
// 		// vendor: 'lodash'//此处lodash为安装的实际包名
// 	},
// 	output: {
// 		path: path.resolve(__dirname,'dist'),
// 		// filename: '[chunkhash].[name].bundle.js'
// 		filename: 'bundle.js',
// 		publicPath:'dist/'//按需加载的模块，需要使用;为项目中所有资源指定一个基础路径
// 	},
// 	module: {
// 		rules:[
// 			{
// 				test: /\.css$/,
// 				use: [
// 					'style-loader','css-loader'
// 				]
// 			}
// 		]
// 	},
//  // 	plugins:[
// 	// 	new webpack.optimize.CommonsChunkPlugin({
// 	// 		// name:'vendor'//指定公共bundle的名称
// 	// 		name: ['vendor','manifest']//若文件没有变动，则hash不变，但是重新打包，时间改变,
// 	// 		//此处公共vendor的打包文件hash没有改变,其他入口文件，manifest文件若内容改变，则hash都改变
// 	// 	})
// 	// ]
// }

function buildConfig (env) {
	return require('config/' + env + '.js')({env: env});
}
module.exports = buildConfig(env);