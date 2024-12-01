module.exports = {
    env: {
      node: true, // Recognize Node.js globals like `require`
      jest: true, // Recognize Jest globals like `test` and `expect`
    },
    extends: [
      'eslint:recommended', // Use ESLint's recommended rules
      'plugin:react/recommended', // If using React
      'airbnb-base', // Optional, if you're using Airbnb's style guide
    ],
    parserOptions: {
      ecmaVersion: 2020, // Ensure compatibility with modern JavaScript
    },
  };
  