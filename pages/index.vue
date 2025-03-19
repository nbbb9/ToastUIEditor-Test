<template>
    <div>
        <div class="font-bold text-2xl text-center text-blue-700">
            마크다운 입력 테스트
        </div>
        <p></p>
        <nuxt-link 
            to="/about"
            class="font-bold text-base text-blue-800 underline"
        >
            About 페이지로 이동
        </nuxt-link>
        <p></p>
        <div class="flex gap-3">
            <input 
                v-model="inputValue"
                class="bg-gray-300 border-2 border-black"
            />
            <div
                class="bg-gray-300 w-96 border-2 border-black"
            >
                입력한 내용 : {{ inputValue }}
            </div>
        </div>
        <p></p>
        <div class="flex gap-3">
            <button
                v-on:click="increase"
                class="border-black border-2 bg-yellow-500 text-xl w-7"
            >
                +
            </button>
            <div class="font-bold text-xl">
                숫자 : {{ count }}
            </div>
        </div>
        <div id="app">
            <p>{{ message }}</p>
        </div>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
        <Editor 
            ref="toastuiEditor" 
            :initial-value="content"
            :height="'500px'" 
            @change="onEditorChange" 
        />
        <div class="place-content-center">
            <button
                class="bg-red-500 center"
                @click="getMarkdown"
            >
                작성내용 확인하기
            </button>
        </div>
        <!-- <div>
            {{ contentMARKDOWN }}
        </div>
        <p></p> -->
        <!-- <Viewer v-if="contentMARKDOWN" :initialValue="content" /> -->
    </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/vue-editor';
import { Viewer } from '@toast-ui/editor/dist/toastui-editor-viewer';
export default {
    data() {
        return {
            content: "## 내용을 입력하세요...",
            message: "message",
            inputValue: "내용을 입력하세요",
            count: 0,
            items: ["Apple", "Banana", "Cherry"],
            contentHTML: "",
            contentMARKDOWN: "",
        };
    },
    components: {
        Editor,
        Viewer
    },
    methods: {
        getHtml() {
            let html = this.$refs.toastuiEditor.invoke("getHTML");
            this.contentHTML = html;
            console.log(html);
        },
        getMarkdown() {
            let markdown = this.$refs.toastuiEditor.invoke("getMarkdown");
            this.contentMARKDOWN = markdown;
            console.log(this.contentMARKDOWN);
            alert("입력한 내용 : " + this.contentMARKDOWN);
        },
        increase() {
            this.count++;
        },
        onEditorChange() {
            this.content = this.$refs.toastuiEditor.invoke("setHtml");
        }
    },
    watch: {
        content(newValue) {
            console.log("content 변경됨:", newValue);
        },
        inputValue(newValue) {
            console.log("inputValue 변경됨:", newValue);
        },
        count(newValue) {
            console.log("count 변경됨:", newValue);
        }
    },
    mounted() {
    }
};
</script>