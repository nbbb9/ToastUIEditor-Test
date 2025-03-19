<template>
    <div>
        <h1>마크다운 입력 테스트</h1>
        <nuxt-link to="/about">About 페이지로 이동</nuxt-link>
        <p />
        <input v-model="inputValue" />
        <p>입력한 내용 : {{ inputValue }}</p>
        <button v-on:click="increase">+</button>
        <p>숫자 : {{ count }}</p>
        <div id="app">
            <p>{{ message }}</p>
        </div>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
            <!-- <toast-editor
                ref="editor"
                :initial-value="content"
                :initial-edit-type="'markdown'"
                :preview-style="'vertical'"
                :height="'700px'"
                @input="onEditorChange"
            /> -->
        <Editor 
            ref="toastuiEditor" 
            :initial-value="content"
            :height="'500px'" 
            @change="onEditorChange" 
        />
        <!-- <client-only>
            <Editor
                ref="toastuiEditor"
                :initial-value="content"
                :initial-edit-type="'markdown'"
                :preview-style="'vertical'"
                :height="'500px'"
                @input="onEditorChange"
            />
        </client-only> -->
        <button @click="getMarkdown">Get Markdown</button>
        <p/> 
        <div>
            {{ contentMARKDOWN }}
        </div>
        <Viewer v-if="content != null" :initialValue="content" />
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
            inputValue: "기본값",
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
        // createAction() {
        //     // content를 저장하는 액션 처리
        //     var content = this.$refs.toastuiEditor.invoke("getMarkdown");
        //     console.log("입력값 : ", content);
        // },
        getHtml() {
            let html = this.$refs.toastuiEditor.invoke("getHTML");
            this.contentHTML = html;
            console.log(html);
        },
        getMarkdown() {
            let markdown = this.$refs.toastuiEditor.invoke("getMarkdown");
            this.contentMARKDOWN = markdown;
            console.log(markdown);
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
            console.log("🎯 content 변경됨:", newValue);
        },
        inputValue(newValue) {
            console.log("inputValue 변경됨:", newValue);
        },
        count(newValue) {
            console.log("count 변경됨:", newValue);
        }
    },
    mounted() {
        // this.$nextTick(() => {
        //     setTimeout(() => {
        //         console.log("🛠 this.$refs.editor:", this.$refs.editor);
        //         if (this.$refs.editor?.editorInst) {
        //             console.log("✅ Editor가 정상적으로 로드됨", this.$refs.editor.editorInst);
        //         } else {
        //         console.error("❌ EditorInst가 아직 생성되지 않음");
        //         }
        //     }, 1000); // 1초 대기 후 editorInst 확인
        // });
    }
};
</script>