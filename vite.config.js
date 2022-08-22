import { defineConfig } from "vite";
import hydrogen from "@shopify/hydrogen/plugin";

const path = require("path");

export default defineConfig({
  plugins: [hydrogen()],
  resolve: {
    alias: {
      contexts: path.resolve(__dirname, "./src/contexts"),
    },
  },
});
