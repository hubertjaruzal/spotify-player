module.exports = {
  "extends": "react-app",
  "plugins": [],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-trailing-spaces": ["error"],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "never" }],
    "eol-last": ["error", "always"],
    "no-extend-native": ["error", {"exceptions": ["Array"]}]
  }
};