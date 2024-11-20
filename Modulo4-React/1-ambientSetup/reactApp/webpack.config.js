const path = require('path') // importa o módulo path do node. croosplataform.
const HtmlWebpackPlugin = require('html-webpack-plugin') // incluir arquivos script.

module.exports = { // exportar um objeto de conf para o webpack.
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // concatena o bundle com dist.
        filename: 'bundle.js', // nome do arquivo de saida.
    },
    module: { // conf como o webpack deve agir com diferentes tipo de arquivos.
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}