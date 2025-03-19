export default {
  ssr: false,//SSR 활성화 (SPA로 하려면 false)
  head: {
    title: "abcd",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  devtools: true,
  css: [
    "@toast-ui/editor/dist/toastui-editor.css",//Toast UI Editor 기본 스타일
    "~/assets/css/tailwind.css"
  ],
  plugins: [
    { src: "~/plugins/toast-ui-editor.js", ssr: false }
  ],
  components: true,
  buildModules: [],
  modules: [],
  build: {
    postcss: {
      plugins:{
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  router: {},
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./layouts/**/*.vue"],
  theme: {
    extend: {},
  },
};
