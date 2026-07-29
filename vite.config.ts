import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/doc/', // 👈 這裡改成 './'
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        // 其他原本的設定保持原樣...
      }
    }
  }
})
    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
