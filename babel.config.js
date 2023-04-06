module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'react-native-reanimated/plugin', {
					relativeSourceLocation: true,
				},
			],
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						tests: ['./tests/'],
						"@components": "./src/components",
					}
				}
			]
		],
	};
};
