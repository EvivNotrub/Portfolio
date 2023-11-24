import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      port: 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
  };

  if (command !== "serve") {
    config.base = "/Portfolio/";
  }

  return config;
});
