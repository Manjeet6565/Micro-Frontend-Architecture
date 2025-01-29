import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "chatApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Chat": "./src/component/Chat.jsx",
        './store': '../../../shared-state/src/store/store', 
      },
      shared: ["react", "react-dom","redux"],
    }),
  ],
  server: {
    port: 5001, // ✅ Main app runs on port 5000
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
  },
});
