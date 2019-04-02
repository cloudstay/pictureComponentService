const path = require("path");
const Client_Path = path.join(__dirname+ '/client');
const Public_Path = path.join(__dirname + "/public");



module.exports =  {
  entry : `${Client_Path}/index.jsx`,
  output : {
    filename : `bundle.js`,
    path : Public_Path
  },
  module : {
    rules : [
      {
        test: /\.jsx?/,
        include : Client_Path,
        loader : 'babel-loader',
        query : {
          presets : ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test : /\.css$/,
        include : Client_Path,
        loader : ['style-loader', 'css-loader']
      },
    ],
  }
};