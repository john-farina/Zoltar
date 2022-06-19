const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'zoltar.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
