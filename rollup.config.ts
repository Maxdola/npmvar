import json from 'rollup-plugin-json';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es', // Changed from 'cjs' to 'es'
    strict: false,
    banner: '#! /usr/bin/env node\n',
  },
  plugins: [
    json()
  ],
  external: [
    'child_process',
    'fs',
    'path',
    'os',
    'https',
    'readline',
    'zlib',
    'events',
    'stream',
    'util',
    'buffer'
  ]
};
