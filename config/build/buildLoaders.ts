import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const CssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {

            // обычные файлы обрабатываться будут как css,а модульные как .module.scss
            auto: (resPath: string) => Boolean(resPath.includes('.module')),

            // В дев режиме в режиме разработчика имена классов пускай будет в понятном виде,а в прод версии в хешированном виде
            localIdentName: options.isDev
              ? '[path][name]__[local]'
              : '[hash:base64:8]'
          }

        },
      },
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    CssLoaders,
  ]
}