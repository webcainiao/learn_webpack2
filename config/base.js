const path = require('path');
const webpack = require('webpack');

module.exports = function(env){
	//设置共用的功能
	return {
		entry: {
			main: '../app/index.js',
			rendor: '',
		},
		output: {
			filename: '[name].bundle.js',
			// path: path.resolve(__dirname,'../dist/assets'),
			publicPath: publicPath,
			sourceMapFilename: '[name].map'
		},
		resolve: {
			extensions: ['.js','.json'],//空字符串不再需要传递，来告诉 webpack 在解析查找js 模块时该检索哪些文件扩展名
			modules: [path.join(__dirname,'../app'),'../node_modules']
		},
		module: {
			rules: [
				{
					test: /\.css/,
					use: ['style-loader','css-loader']
				},
				{
					test: /\.(png|jpeg|jpg|gif)$/,
					use: 'file-loader'
				},
				{
					test: /\.(woff|woff2|eot|ttf|svg)$/,
					use: 'url-loader?limit=10000'
				},
			]
		},
		plugins: [
			new ForkCheckerPlugin(),
			new webpack.optimize.CommonsChunkPlugin({
				name: ['main','vendor'].reverse()
			}),
			new HtmlWebpackPlugin({
				template: '../index.html',
				chunksSortMode: 'dependency'
			})
		]
	}

}