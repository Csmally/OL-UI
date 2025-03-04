export default {
    "packages/**/*.{ts,tsx}": ["eslint --config eslint.config.mjs"],
    "apps/website/**/*.{ts,tsx}": [
        "eslint --config apps/website/eslint.config.js",
    ],
    "*.css": ["stylelint"],
};
