module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    babelOptions: {
      presets: ["next/babel"]
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:@next/next/recommended", "plugin:cypress/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  ignorePatterns: [".next/", "examples/", "node_modules/", "public/"],
  rules: {
    "react/function-component-definition": "off",
    "jsx-a11y/media-has-caption": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": ["error", {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }],
    "react/react-in-jsx-scope": "off",
    "import/order": ["error", {
      alphabetize: {
        order: "asc",
        caseInsensitive: true
      },
      "newlines-between": "always",
      groups: ["builtin", "external", "parent", "sibling", "index"],
      pathGroups: [{
        pattern: "react",
        group: "external",
        position: "before"
      }, {
        pattern: "@/**",
        group: "external",
        position: "after"
      }],
      pathGroupsExcludedImportTypes: ["builtin"]
    }]
  },
  overrides: [{
    files: ["**/*.ts?(x)"],
    extends: ["plugin:@typescript-eslint/recommended"],
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
      warnOnUnsupportedTypeScriptVersion: true,
      tsconfigRootDir: "."
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_"
      }]
    }
  }]
};