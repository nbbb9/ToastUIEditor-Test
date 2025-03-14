export default {
  ssr: true, // SSR 활성화 (SPA로 하려면 false)
  head: {
    title: "My Nuxt 2 App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  css: [
    "codemirror/lib/codemirror.css",//코드 편집기 스타일
    "@toast-ui/editor/dist/toastui-editor.css"//Toast UI Editor 기본 스타일
  ],
  plugins: [
    { src: "~/plugins/toast-ui-editor.js", ssr: false }
  ],
  components: true,
  buildModules: [],
  modules: [],
  build: {},
};
