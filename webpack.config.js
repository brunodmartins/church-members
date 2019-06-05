const path = require('path');
const webpack = require('webpack');
const bundlePath = path.resolve(__dirname, 'dist/');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options:{
					babelrc:true,
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {},
					},
				],
			},
		]
	},
	resolve: { 
		alias: {
			components: path.resolve(__dirname, 'client', 'components'),
			actions: path.relative(__dirname, 'client', 'actions'),
			reducers: path.relative(__dirname, 'client', 'reducers')
		},
		extensions: ['*', '.js', '.jsx'] 
	},
	output: {
		publicPath: bundlePath,
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname,'public'),
		port: 3000,
		publicPath: 'http://localhost:3000/dist'
	},
	plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
