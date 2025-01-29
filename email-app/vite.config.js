import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'emailApp',
      filename: 'remoteEntry.js',
      exposes: {
        './EmailApp': './src/component/EmailApp.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5002, 
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});