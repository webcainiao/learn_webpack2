const path =  require('path');
const webpack= require('webpack');

module.exports =  function(env){
	return {
		output: {
			path: path.resolve(__dirname,'../dist/assets'),
			filename: '[name].bundle.js',
			publicPath: publicPath,
			sourceMapFilename: '[name].map'
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new UglifyJsPlugin({
				beautify: false,
				mangle: {
					screw_ie8: true,
					keep_fnames: true
				},
				compress: {
					screw_ie8: true
				},
				comments: false
			})
		]
	}
}