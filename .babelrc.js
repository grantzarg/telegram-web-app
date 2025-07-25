const plugins = [
    [
        'babel-plugin-import',
        {
            libraryName: '@mui/material',
            libraryDirectory: '',
            camel2DashComponentName: false,
        },
        'core',
    ],
];

module.exports = { plugins, "presets": ["@babel/preset-env", "@babel/preset-react"] };