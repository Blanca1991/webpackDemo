const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  	devtool: 'eval-source-map',
  	entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
  	devServer: {
    	contentBase: "./public",
    	historyApiFallback: true,
    	inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('hello my webpack'),
    		new HtmlWebpackPlugin({
        		template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    		}),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
}
