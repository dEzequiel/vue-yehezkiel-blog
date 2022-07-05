const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "standard"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
    "prettier", // Deactivate all conflict rules with ESLint
  ],
  rules: {
    "no-unused-vars": RULES.WARN,
    "no-multiple-empty-lines": RULES.WARN,
    "no-trailing-spaces": RULES.OFF,
  },
};
