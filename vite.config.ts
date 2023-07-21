import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/custom-new-tab/", // This is the default
  plugins: [react()],
});
