import { build } from 'esbuild';
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin';

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
        transform: postcssModules({})
      }
    )]
  })
  
  build({
    ...shared,
    outfile: 'dist/module.js',
    format: 'esm',
    plugins: [
      sassPlugin({
        transform: postcssModules({})
      }
    )]
  })
  
  new Generator({
    entry: entryFile,
    output: 'dist/index.d.ts',
  }).generate()

}

export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));