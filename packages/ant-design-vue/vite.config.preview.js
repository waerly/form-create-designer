import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import path from 'path'

const FC_SRC = '/private/var/deploy/nginx/html/si-form-create/packages'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/v3/antd/designer/',
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ['vue'],
                    'ant-design-vue': ['ant-design-vue'],
                },
                globals: {
                    vue: 'Vue',
                }
            },
        },
        chunkSizeWarningLimit: 2000,
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: [
            // 直接从 si-form-create 源码构建，无需预先编译 si-form-create
            {find: /^@form-create\/ant-design-vue$/, replacement: path.join(FC_SRC, 'ant-design-vue/src/index.js')},
            {find: '@form-create/core', replacement: path.join(FC_SRC, 'core')},
            {find: '@form-create/utils', replacement: path.join(FC_SRC, 'utils')},
        ]
    },
    plugins: [vue(), vueJSX()]
})
