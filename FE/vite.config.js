import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"; // Use node:path for compatibility

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for simpler imports
    },
  },
  build: {
    outDir: "dist", // Ensure the output folder is 'dist'
    emptyOutDir: true, // Clean the dist folder before each build
  },
});
