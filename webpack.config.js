const path = require('path');
const webpack = require('webpack');

module.exports  = {
	entry: {
		main:'./app/index.js',
		vendor: 'lodash'//此处lodash为安装的实际包名
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[chunkhash].[name].bundle.js'
	},
  plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor'//指定公共bundle的名称
		})
	]
}
