import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    mode   : 'development',
    entry  : './src/client/app.js',
    output : {
      path     : path.join(__dirname, 'public', 'dist'),
      filename : 'bundle.js',
    },
    module: {
      rules: [{
        loader  : 'babel-loader',
        test    : /\.js$/,
        exclude : /node_modules/
      }, {
        test : /\.s?css$/,
        use  : [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool   : isProduction ? 'nosources-source-map' : 'cheap-module-eval-source-map',
    devServer : {
      contentBase        : path.join(__dirname, 'public'),
      publicPath         : '/dist/',
      historyApiFallback : true,
    }
  };
};
