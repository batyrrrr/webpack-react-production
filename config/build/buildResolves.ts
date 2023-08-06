import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // для работы с абсолют импортом
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],

    // самый родительский файл в папке src
    mainFiles: ['index'],

    alias: {}
  }
}
