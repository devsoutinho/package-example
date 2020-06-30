import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const external = [
  'react',
  'react-dom',
  'styled-components',
  'prop-types',
];

const plugins = [
  babel({
    babelHelpers: 'inline',
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: /node_modules/,
  }),
];

export default [
  {
    input: {
      'components/Title/Title': './src/components/Title/Title.js',
    },
    output: [
      {
        dir: 'lib',
        entryFileNames: '[name].js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
    external,
    plugins,
  }
]