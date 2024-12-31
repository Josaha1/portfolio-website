import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-website/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
