const path = require("path");



module.exports = {
    entry: "./src/app.js", //odakle pconje wepack
    output: {
        path: path.join(__dirname, "public"),//aps put
        filename: "bundle.js"//koji file
    },

    module: {
        rules: [{
            loader: "babel-loader", //da prevodi buble
            test: /\.js$/, //sve fileove sto zavrs na js
            exclude: /node_modules/ //osim module
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: { 
        contentBase: path.join(__dirname, "public"), //devserver servira index.html 
        historyApiFallback: true //devserver hadling
        //routing via client side code
    }
}; 