import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import webpack, { HotModuleReplacementPlugin } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // чтобы isDev использовать в файле напр i18n или другом глубоко расположенном файле
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    // позволяет обновлять без сохранения,так же в devServer добавить строку hot:true
    new HotModuleReplacementPlugin()
  ]

}
