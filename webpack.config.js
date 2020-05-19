const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = [
    {
        context: path.resolve(__dirname, "src"),
        entry: {
            app: [
                "./js/app.js",
                "./scss/app.scss"
            ]
        },
        output: {
            path: path.resolve(__dirname, "public"),
            filename: "./assets/js/bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false
                            }
                        },
                        "sass-loader"
                    ]
                }
            ]
        },
        devtool: "source-map",
        plugins: [
            new Dotenv({
                path: './.env'
            }),
            new MiniCssExtractPlugin({
                filename: "./assets/css/style.css"
            })
        ]
    }
];
