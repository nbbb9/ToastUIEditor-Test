import Vue from "vue";
import { Editor } from "@toast-ui/vue-editor";

// Vue.component("ToastEditor", Editor);

// 클라이언트에서만 실행되도록 설정
if (process.client) {
    Vue.component("ToastEditor", Editor);
    console.log("📌 Toast UI Editor 플러그인 로드됨");
}