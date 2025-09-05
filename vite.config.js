import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Garante que os assets sejam carregados a partir da raiz do servidor
  build: {
    outDir: "dist", // Diretório de saída do build
    assetsDir: "assets", // Pasta para os arquivos estáticos
  },
});
