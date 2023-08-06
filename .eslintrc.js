module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                '*ts', '*tsx'
            ],

            "parserOptions": {
                "sourceType": "script",
                "project": ["./tsconfig.json"],

            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-indent': [2, 2],
        'indent': [2, 2],
        'react-jsx-indent-props': 'off',
        // именованный экспорт
        'import/prefer-default-export': 'off',
        // если переменная не используется не выдавать ошибкой
        'no-unused-vars': 'warn',
        "react/prop-types": 'off',
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/strict-boolean-expressions": 'off',
        "@typescript-eslint/prefer-nullish-coalescing": 'off',
        "@typescript-eslint/explicit-function-return-type": 'off',
        '@typescript-eslint/promise-function-async': 'off',
        'react/no-deprecated': 'off',
        "space-before-function-paren": "off",
        '@typescript-eslint/space-before-function-paren': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'no-trailing-spaces': 'off',
        'padded-blocks': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'off'
    }
}
