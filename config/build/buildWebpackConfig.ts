import  webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import path from 'path'
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";
import { buildResolvers } from "./buildResolve";


export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
const {paths, mode, isDev} = options;
    
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build"),
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
          },
          resolve: buildResolvers(options), 
          devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
      }
}