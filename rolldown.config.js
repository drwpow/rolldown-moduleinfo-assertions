import css from 'rollup-plugin-import-css';

/** @type {import("rolldown").InputOptions} */
export default {
  plugins: [
    css({
      output: 'all-components.css',
    }),
  ],
  input: 'src/index.js',
  external: ['*'],
  output: {
    dir: './dist/',
    sourcemap: true,
  },
};
