const path = require('path');

module.exports = function(env){
	return {
		entry: {
			main: '../app/index.js',
			rendor: '',
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname,'../dist/assets'),
			publicPath: publicPath,
			sourceMapFilename: '[name].map'
		},
		resolve: {
			extensions: ['','.js','.json'],
			modules: [path.join(__dirname,'../app'),'../node_modules']
		},
		module: {
			
		},
		plugins: [

		]
	}

}