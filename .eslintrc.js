module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-recommended
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended", // recomended jest styling
    "plugin:jest/style",
    "plugin:eslint-comments/recommended", // Additional ESLint rules for ESLint directive comments (e.g. //eslint-disable-line).
    "plugin:import/errors", // This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names
    "plugin:import/warnings",
    "plugin:import/typescript", // Enables the import plug in TypeScript
    "plugin:promise/recommended", // Enforce best practices for JavaScript promises.
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:security/recommended" // Run eslint-plugin-security is a security requirnment 
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: [
    "@typescript-eslint",
    "custom-rules",
    "eslint-plugin-tsdoc",
    "jest",
    "prettier",
    "import",
    "promise",
    "react",
    "react-native",
    "react-hooks",
    "security",
  ],
  settings: {
    "import/ignore": ["react-native"],
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    // resolve plugin, which implements Node's import behavior.
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".native.js"],
      },
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    semi: ["error", "always"],
    quotes: "off", // off for next rule
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "custom-rules/no-local-import": "error", // Checks effect dependencies
    "tsdoc/syntax": "warn", // warn on documentation errors which don't follow ts-doc convention
    "no-console": "warn", // no console.log rule
    "max-len": ["error", { code: 100, comments: 120, ignoreUrls: true }],
    "no-else-return": "error", // If an if block contains a return, the else statement is redundant
    "default-param-last": ["warn"], // Putting default parameter at last allows function calls to omit optional tail arguments.
    "no-extra-bind": "error", // removes unnecessary bind calls (they cause performance hit)
    "prefer-object-spread": "warn",
    "prefer-spread": "warn",
    eqeqeq: ["error", "smart"], // It is considered good practice to use the type-safe equality operators === and !==
    // indent: "off", // has to be off for the next rule
    // "@typescript-eslint/indent": ["error", 2], // enforces the indentation to be 2 spaces
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/unbound-method": [
      // Warns when a method is used outside of a method call.
      "error",
      {
        ignoreStatic: true,
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "warn", // prefers nullish-coalescing over logical operators chaining
    "@typescript-eslint/member-ordering": "warn", // A consistent ordering of fields, methods and constructors
    "@typescript-eslint/array-type": ["warn", { default: "array" }], // prefers [ ] arrays over generics
    "@typescript-eslint/prefer-optional-chain": "error", // prefers optional chaining over chained logical operators
    "@typescript-eslint/prefer-readonly": "warn", // This rule enforces that private members are marked as readonly if they're never modified outside of the constructor.
    "@typescript-eslint/no-throw-literal": "error", // This rule restricts what can be thrown as an exception (only Error class)
    "@typescript-eslint/unified-signatures": "warn", // Warns for any two overloads that could be unified into one
    "no-magic-numbers": "off",
    "@typescript-eslint/no-untyped-public-signature": ["warn"],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["warn"],
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      {
        ignoreArrayIndexes: true,
        ignore: [0, 1, -1],
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],
    "@typescript-eslint/no-floating-promises": "error", // dissalowes Unhandled promises
    "no-unused-expressions": "off", // off for the next rule
    "@typescript-eslint/no-unused-expressions": ["error"], //  eliminates unused expressions which have no effect on the state of the program
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "no-useless-constructor": "off", // off for the next rule
    "@typescript-eslint/no-useless-constructor": "error", // ES-2015 provides default constructors
    "@typescript-eslint/prefer-for-of": "warn", // for-of loop when the loop index is only used to read
    "@typescript-eslint/require-array-sort-compare": "warn", // requires a sort function for non user defined types
    "@typescript-eslint/restrict-plus-operands": [
      // When adding two variables, operands must both be of type number or of type string
      "error",
      { checkCompoundAssignments: true },
    ],
    "prettier/prettier": "error",
    "promise/catch-or-return": ["error", { allowThen: true }],
  },
};
