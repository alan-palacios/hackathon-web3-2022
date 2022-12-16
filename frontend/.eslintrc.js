module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md#when-not-to-use-it
		// https://github.com/yannickcr/eslint-plugin-react/issues/3052#issuecomment-1017555974
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		"import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
		'react/require-default-props': 'off', // we don't use prop-types

    'react/require-default-props': 'off', // we don't use prop-types
    'react/button-has-type': 'off',
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',

		'@typescript-eslint/no-unused-vars': 'warn', // 'error' is not convinient in development

		'consistent-return': 'off', // we want functions to have different return behavior
		'no-underscore-dangle': 'off',

		'@typescript-eslint/no-unused-vars': 'warn', // 'error' is not convinient in development

		'react/jsx-props-no-spreading': ['error', { exceptions: ['Input', 'FileInput', 'Textarea', 'Select'] }], // disable for form elements, cuz @mantine/form input props needs to be desctructured
	},
};
