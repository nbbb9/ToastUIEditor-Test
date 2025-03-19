export default {
  ssr: false, // SSR 활성화 (SPA로 하려면 false)
  head: {
    title: "abcd",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  css: [
    // "codemirror/lib/codemirror.css",//코드 편집기 스타일
    // 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.3/codemirror.css',
    "@toast-ui/editor/dist/toastui-editor.css"//Toast UI Editor 기본 스타일
  ],
  plugins: [
    { src: "~/plugins/toast-ui-editor.js", ssr: false }
  ],
  components: true,
  buildModules: [],
  modules: [],
  build: {},

  router: {
    extendRoutes(routes) {
      routes.push({
        path: "/", // 기본 루트 경로
        redirect: "/new" // "/new" 페이지로 자동 리디렉트
      });
    }
  }
  
};
