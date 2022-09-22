import { build } from 'esbuild';
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin';

import c41c from 'postcss-calc';
import customprops from 'postcss-custom-properties';
import pseud0 from 'postcss-dir-pseudo-class';
import focuz from 'postcss-focus-ring';
import functions from 'postcss-functions';
import importz from 'postcss-import';
import inherit from 'postcss-inherit';
import loader from 'postcss-loader';
import logical from 'postcss-logical';
import modules from 'postcss-modules';
import svgz from 'postcss-svg';
import nested from 'postcss-nested';

import npmdts from 'npm-dts';
const { Generator } = npmdts;

import * as url from 'url';

const entryFile = 'src/index.ts';

export const bundle = (pkgjson) => {

  const shared = {
    entryPoints: [entryFile],
    bundle: true,
    external: pkgjson.peerDependencies ? Object.keys(pkgjson.peerDependencies) : [],
  }

  build({
    ...shared,
    outfile: 'dist/main.js',
    plugins: [
      sassPlugin({
        transform: postcssModules({
        }, [
          //inherit,
          c41c,
          customprops,
          pseud0,
          focuz,
          functions,
          //importz,
          //loader,
          logical,
          nested,
          svgz
        ])
      }
    )]
  })
  
  build({
    ...shared,
    outfile: 'dist/module.js',
    format: 'esm',
    plugins: [
      sassPlugin({
        transform: postcssModules({
        }, [
          //inherit,
          c41c,
          customprops,
          pseud0,
          focuz,
          functions,
          //importz,
          //loader,
          logical,
          nested,
          svgz
        ])
      }
    )]
  })
  
  new Generator({
    entry: entryFile,
    output: 'dist/index.d.ts',
  }).generate()

}

export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));