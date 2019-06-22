const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../','client', 'components'),
			actions: path.resolve(__dirname, '../', 'client', 'actions'),
			reducers: path.resolve(__dirname, '../', 'client', 'reducers'),
			services: path.resolve(__dirname, '../', 'client', 'services')
    },
    extensions: ['.js'],
  },
};
