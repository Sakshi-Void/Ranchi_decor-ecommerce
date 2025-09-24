// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // ✅ SVGs ko React component ke roop me use karne ke liye
  ],
  optimizeDeps: {
    exclude: ["lucide-react"], // Agar ab use nahi karte ho to hata bhi sakte ho
  },
});
