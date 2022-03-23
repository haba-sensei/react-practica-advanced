const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "./",
	},
	mode: "development",
	target: "web",
	cache: false,
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/Components/"),
			"@core-ui": path.resolve(__dirname, "src/Core-ui/"),
			"@pages": path.resolve(__dirname, "src/Pages/"),
			"@containers": path.resolve(__dirname, "src/Containers/"),
			"@routes": path.resolve(__dirname, "src/Routes/"),
			"@validations": path.resolve(__dirname, "src/Validations/"),
			"@services": path.resolve(__dirname, "src/Services/"),
			"@hooks": path.resolve(__dirname, "src/Hooks/"),
			"@helpers": path.resolve(__dirname, "src/Helpers/"),
			"@context": path.resolve(__dirname, "src/Context/"),
			"@constants": path.resolve(__dirname, "src/Constants/"),
			"@assets": path.resolve(__dirname, "src/Assets/"),
			"@images": path.resolve(__dirname, "src/Assets/Images/"),
			"@icons": path.resolve(__dirname, "src/Assets/Images/Icons/"),
			"@logos": path.resolve(__dirname, "src/Assets/Images/Logos/"),
			"@video": path.resolve(__dirname, "src/Assets/Video/"),
			"@fonts": path.resolve(__dirname, "src/Assets/Fonts/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "resolve-url-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				type: "asset",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],
	devServer: {
		static: path.join(__dirname, "dist"),
		historyApiFallback: true,
		compress: true,
		port: 9090,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
