import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Icons from "unplugin-icons/vite";
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({
      autoInstall: true,
      jsx: "react",
      compiler: "jsx",
    }),
    tsconfigPaths(),
  ],
});
