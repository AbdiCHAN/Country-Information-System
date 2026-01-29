import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",            // make sure root is project root
  publicDir: "public",  // tell Vite where static files are
});
