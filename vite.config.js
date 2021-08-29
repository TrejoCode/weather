import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      { find: "pages", replacement: path.resolve(__dirname, "./src/pages") },
      { find: "static", replacement: path.resolve(__dirname, "./src/static") },
      { find: "api", replacement: path.resolve(__dirname, "./src/api") },
    ],
  },
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
