import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'curry',
			file: pkg.browser,
      format: 'umd',
      sourcemap: true,
		},
		plugins: [
			resolve(),
      commonjs(),
      babel({
        sourceMap: true,
				exclude: ['node_modules/**']
      }),
      uglify(),
		]
	},
	{
		input: 'src/main.js',
		output: [
			{ file: pkg.main, format: 'cjs', sourcemap: true },
			{ file: pkg.module, format: 'es', sourcemap: true }
    ],
    plugins: [
      babel({
        sourceMap: true,
				exclude: ['node_modules/**']
      }),
		]
	}
];
