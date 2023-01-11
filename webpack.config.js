const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: './src/app.tsx',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'build/app.js'
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},
	plugins: [
		new CopyPlugin([
			{
				context: __dirname + '/src',
				from: 'src/*.css',
				to: __dirname + '/lib',
				force: true
			},
			{
				from: 'src/fonts',
				to: './lib',
				toType: 'dir'
			}
		])
	],
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	devServer: {
		port: 8080,
		host: 'localhost',
		https: false,
		open: true,
		allowedHosts: 'all'
	  }
};