import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/arknight-gemstone-calculator/' : '/';

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});
