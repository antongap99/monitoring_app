module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.ts'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	settings: {
		'import/resolver': {
			'node': {
				'paths': ['src'],
				'extensions': ['.js', '.jsx', '.ts', '.tsx', '.svg?react']
			}
		},
	},
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		indent: ['error', 4],
		'react/jsx-indent': ['error', 4, {indentLogicalExpressions: true}],
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/jsx-indent-props': ['error', 4],
		'import/extensions': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'max-len': [
			'error',
			{
				'code': 120,
				'ignoreUrls': true,
				'ignoreComments': true
			}
		],
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'warn',
		'react/function-component-definition': 'off',
		'no-param-reassign': 'off',
		'arrow-body-style': 'off',
		'no-console': 'off',
		"no-plusplus": 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'import/no-unresolved': [
			'error',
			{
				ignore: ['\\.svg\\?react$']
			}
		],
		'consistent-return': 'off',
	},
	globals: {
		'React': true,
	},
}
