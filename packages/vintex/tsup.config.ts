import { defineConfig } from 'tsup';

export default defineConfig(() => ({
  // treeshake: true,
  // splitting: true,
  entry: ['src/**/*.ts'],
  target: 'es2019',
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react', 'next'],
  banner: { js: '"use client"' }
}));
