const path = require('path');

module.exports = function(env){
	return {
		devtool: 'cheap-module-source-map',
		output: {
			path: path.resolve(__dirname,'../dist/assets'),
			filename: '[name].bundle.js',
			publicPath: publicPath,
			sourceMapFilename: '[name].map'
		},
		devServer: {
			port: 8080,
			host: 'localhost',
			historyApiFallback: true,
			noInfo: false,
			stats: 'minimal',
			publicPath: publicPath
		}
	}
}