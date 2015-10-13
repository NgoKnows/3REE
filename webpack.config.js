var path = require('path');
var ROOT_DIR = __dirname;

module.exports = {
    context: ROOT_DIR,

    entry: [path.resolve(ROOT_DIR, 'client', 'js', 'index.es6.js')],

    resolve: {
        extensions: ['', '.js', '.jsx', '.es6.js'],
        alias : {
            react: path.join(__dirname, 'node_modules', 'react'),
            classes: path.join(ROOT_DIR, 'client', 'js', 'classes'),
            components: path.join(ROOT_DIR, 'client', 'js', 'components'),
            reduxFiles: path.join(ROOT_DIR, 'client', 'js', 'redux')
        }
    },

    output: {
        path: path.join(ROOT_DIR,'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                loader: 'babel',
                exclude: path.join(ROOT_DIR, 'node_modules'),
                query: {
                    stage: 1
                }
            }
        ]
    }
};