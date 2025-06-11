import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  publicDir: 'public',
  resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte'],
	},
})
