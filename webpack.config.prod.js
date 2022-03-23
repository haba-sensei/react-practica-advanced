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
		publicPath: "/",
	},
	mode: "production",
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve("src/Components/"),
			"@core-ui": path.resolve("src/Core-ui/"),
			"@pages": path.resolve("src/Pages/"),
			"@containers": path.resolve("src/Containers/"),
			"@routes": path.resolve("src/Routes/"),
			"@validations": path.resolve("src/Validations/"),
			"@services": path.resolve("src/Services/"),
			"@hooks": path.resolve("src/Hooks/"),
			"@helpers": path.resolve("src/Helpers/"),
			"@context": path.resolve("src/Context/"),
			"@constants": path.resolve("src/Constants/"),
			"@assets": path.resolve("src/Assets/"),
			"@icons": path.resolve("src/Assets/Images/Icons/"),
			"@logos": path.resolve("src/Assets/Images/Logos/"),
			"@images": path.resolve("src/Assets/Images/"),
			"@video": path.resolve("src/Assets/Video/"),
			"@fonts": path.resolve("src/Assets/Fonts/"),
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
			cache: false,
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
