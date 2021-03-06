const path = require('path');

const CLIENT_PATH = path.join(`${__dirname}/client`);
const PUBLIC_PATH = path.join(`${__dirname}/public`);


module.exports = {
  entry: `${CLIENT_PATH}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: CLIENT_PATH,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        include: CLIENT_PATH,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
};
