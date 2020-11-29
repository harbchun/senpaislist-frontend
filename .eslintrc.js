module.exports = {
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        }
    },
    env: {
        browser: true, // Enables browser globals like window and document
        amd: true, // Enables require() and define() as global variables as per the amd spec.
        node: true // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
    ],
    rules: {
        semi: ['error', 'never'],
        "no-unused-vars": ["warn", {
            // ignore _ and variables with 'ignore' on the name
            "argsIgnorePattern": "^_$|[iI]gnore",
            "varsIgnorePattern": "^_$|[iI]gnore"
        }],
        "max-len": ["error", 100, 2, { ignoreUrls: true, ignorePattern: "^import [^,]+ from |^export | implements " }], // airbnb is allowing some edge cases
        "no-console": "warn",
        "no-alert": "error", // airbnb is using warn
        "import/first": 0,
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "import/extensions": 0,
        "import/no-unresolved": [ "error", { ignore: ["^@"] }],
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0, // Allow aliases as import path  
        "no-trailing-spaces": "warn",
        "linebreak-style": "off", // Don't play nicely with Windows.
        "object-curly-newline": "off", // Incompatible with prettier
        "no-mixed-operators": "off", // Incompatible with prettier
        "function-paren-newline": "off", // Incompatible with prettier
        "no-plusplus": "off",
        "space-before-function-paren": 0, // Incompatible with prettier
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
};
