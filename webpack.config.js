/*
File copied from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/webpack.config.js
File copied on 2021-02-06.
Copy of full license is located at licenses/tut-react-and-spring-data-rest/LICENSE.

Modifications:
None
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};
