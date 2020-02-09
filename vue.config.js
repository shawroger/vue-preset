const path = require("path");

module.exports = {
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: [path.resolve(__dirname, "src/assets/global.less")]
		}
	},
	chainWebpack: config => {
		config.when(process.env.NODE_ENV === "development", config => {
			config.plugin("html").tap(args => {
				args[0].isDev = true;
				return args;
			});
		});

		config.when(process.env.NODE_ENV === "production", config => {
			config.plugin("html").tap(args => {
				args[0].isDev = false;
				return args;
			});
		});
	}
};
