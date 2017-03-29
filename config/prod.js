const path =  require('path');
const webpack= require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports =  function(env){
	return webpackMerge(commonConfig(),{//使用merge合并base
		// output: {//共用base里面设置，这里省略
		// 	path: path.resolve(__dirname,'../dist/assets'),
		// 	filename: '[name].bundle.js',
		// 	publicPath: publicPath,
		// 	sourceMapFilename: '[name].map'
		// },
		output: {
			path: path.resolve(__dirname,'../dist/prod'),
			filename: '[name].[chunkhash].bundle.js',
			chunkFilename: '[name].[chunkhash].js'
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new UglifyJsPlugin({//webpack.optimize.UglifyJsPlugin
				beautify: false,
				mangle: {
					screw_ie8: true,
					keep_fnames: true
				},
				compress: {
					screw_ie8: true
				},
				comments: false
			}),
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringfy('prod');
				}
			}),
			new ManifestPlugin({
				fileName: 'my-manifest.json',
				basePath: '/'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: ['vendor','manifest'],
				minChunks: Infinity
			}),
			new webpack.HashedModuleIdsPlugin(),
			new WebpackChunkHash(),
			new ChunkManifestPlugin({
				filename: 'chunk-manifest.json',
				manifestVariable: 'webpackManifest'
			})
		]
	})
}