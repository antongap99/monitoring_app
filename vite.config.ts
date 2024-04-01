import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig({
    base: process.env.NODE_ENV === 'development' ? '/' : '/apicar',
    resolve: {
        alias: {
            src: path.resolve('src/'),
        },
        preserveSymlinks: true,
    },
    plugins: [
        svgr(),
        react(),
        tsconfigPaths(),
        splitVendorChunkPlugin(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico'],
            manifest: {
                name: 'APICAR',
                short_name: 'APICAR',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '/icons/logo_16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/logo_32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/logo_152.png',
                        sizes: '152x152',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {
                        src: '/icons/logo_256.png',
                        sizes: '256x256',
                        type: 'image/png',
                        purpose: 'any',
                    },
                ],
            },
        }),
    ],
});
