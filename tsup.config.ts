import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  tsconfig: 'tsconfig.build.json',
  minify: true,
  sourcemap: false,
  clean: true,
  dts: true,
});
