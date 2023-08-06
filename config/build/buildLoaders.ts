import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

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

        }
      },
      'sass-loader'
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
  // babel настраиваем только для тех случаи  если не работаем с тайпскрипт,можно убрать с resolves

  const babelLoader = {
    // 1 дефолтно настроен на js,нужно добавить ts | tsx,
    // 2 и поле plugins(скопирован с доки i8n plugins -> https://github.com/gilbsgilbs/babel-plugin-i18next-extract)
    // 3 поле locales скопирован с той же ссылки сверху
    // 4 поле keyasdefaultValue из доки ссылка сверху
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  return [
    CssLoaders,
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader
  ]
}
