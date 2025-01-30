const path = require('path')

module.exports = {
	entry: './ts/main.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'static/js'),
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	mode: 'production', // development or production
	watch: true,
}
