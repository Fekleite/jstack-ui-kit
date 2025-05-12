import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/**/*.{ts,tsx}',
    'src/styles/index.css',
    '!src/**/*.stories.{ts,tsx}',
  ],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  tsconfig: 'tsconfig.build.json',
  minify: true,
  sourcemap: false,
  clean: true,
  dts: true,
});
