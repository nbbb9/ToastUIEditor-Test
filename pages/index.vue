<template>
    <div>
        <h1>마크다운 입력 테스트</h1>
        <client-only>
            <div>
                <toast-editor
                    ref="editor"
                    :initial-value="content"
                    :initial-edit-type="'markdown'"
                    :preview-style="'vertical'"
                    :height="'700px'"
                />
                <!-- <button @click="getMarkdown">Get Markdown</button> -->
            </div>
        </client-only>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "## 내용을 입력하세요..."
        };
    },
    // methods: {
    //     getMarkdown() {
    //         console.log(this.$refs.editor.editorInst.getMarkdown());
    //     }
    // },
    watch: {
        content(newValue) {
            console.log("content 변경됨:", newValue);
        }
    },
    mounted() {
        console.log("초기 content 값:", this.content);
    }
};
</script>  