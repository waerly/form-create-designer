import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import path from 'path'

const FC_SRC = '/private/var/deploy/nginx/html/si-form-create/packages'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080,
        // 允许访问 si-form-create 源码目录（跨项目热更新）
        fs: {
            allow: [
                path.resolve(__dirname),
                '/private/var/deploy/nginx/html/si-form-create',
            ]
        }
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: [
            // si-form-create 源码别名，改动后 Vite 自动热更新
            // 精确匹配包名（无子路径），指向 src 入口
            {find: /^@form-create\/ant-design-vue$/, replacement: path.join(FC_SRC, 'ant-design-vue/src/index.js')},
            // 子路径匹配（如 @form-create/core/src/index），指向包目录
            {find: '@form-create/core', replacement: path.join(FC_SRC, 'core')},
            {find: '@form-create/utils', replacement: path.join(FC_SRC, 'utils')},
        ]
    },
    plugins: [vue(), vueJSX()]
})
