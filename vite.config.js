import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        form: resolve(__dirname, "src/form/form.html"),
      },
    },
  },
  server: {
    port: 3000,
    host: "monblog.local",
  },
});
