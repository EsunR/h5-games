module.exports = {
    extends: ["prettier"],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
    },
};
