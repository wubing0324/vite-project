module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "selector-class-pattern": null,
    "no-descending-specificity": null
  }
};