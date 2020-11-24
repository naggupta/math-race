module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      "airbnb", 
        "plugin:react/recommended"
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 6,
      sourceType: 'module',
    },
    plugins: [
      'react'
    ],
    parser:"babel-eslint",
    rules: {
      "react/jsx-filename-extension":0,
      "no-use-before-define":0,
      "linebreak-style":0,
      "react/prefer-stateless-function":0,
      "indent":0,
      "no-trailing-spaces":0,
      "react/jsx-indent":0,
      "no-invalid-this": 0,
      "babel/no-invalid-this": 0,
      "react/state-in-constructor":0,
      "no-unused-vars":0,
      "react/no-unused-state":0,
      "react/destructuring-assignment":0,
      "react/prop-types":0,
      "implicit-arrow-linebreak":0,
      "arrow-body-style":0,
      "semi":0,
      "max-len":0,
      "react/jsx-one-expression-per-line":0,
      "no-console":0,
      "no-new":0,
      "lines-between-class-members":0,
      "object-shorthand":0,
      "react/jsx-fragments":0,
      "no-template-curly-in-string":0,
      "nonblock-statement-body-position":0,
      "no-else-return":0,    
      "curly":0,
      "react/display-name":0,
      "react/prop-types":0,
      "object-curly-newline":0,
      "no-case-declarations":0,
      "import/prefer-default-export":0,
      "no-nested-ternary":0,
      "jsx-a11y/control-has-associated-label":0,
      "react/forbid-prop-types":0,
      "jsx-a11y/label-has-associated-control":0,
      "jsx-a11y/anchor-is-valid":0,
      "react/jsx-props-no-spreading":0,
      "react/require-default-props":0,
      "no-underscore-dangle":0,
      // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      // "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    },
  };
  

  