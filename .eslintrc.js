module.exports = {
    "plugins": ["jasmine"],
    "extends": ["eslint:recommended", "plugin:jasmine/recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "jasmine": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "allFeeds": true,
        "loadFeed": true,
        "since": true,
        "var2": false
    }
};