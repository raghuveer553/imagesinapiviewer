var webpack = require('webpack');
var path = require('path');

module.exports = {
	target: 'node',
	devtool: 'inline-source-map',
	entry: ['./src/components/MainPageContainer.js'],
	output: {
		path: path.join(__dirname, 'src', 'static','js'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
	// plugins: [
	// 	new webpack.DefinePlugin({
	// 		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	// 	}),
	// 	new webpack.optimize.DedupePlugin(),
	// 	new webpack.optimize.OccurenceOrderPlugin(),
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compress: { warnings: false },
	// 		mangle: true,
	// 		sourcemap: false,
	// 		beautify: false,
	// 		dead_code: true
	// 	}),
	// ]

}
