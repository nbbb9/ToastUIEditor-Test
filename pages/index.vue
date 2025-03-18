<template>
    <div>
        <h1>마크다운 입력 테스트</h1>
        <client-only>
            <toast-editor
                ref="editor"
                :initial-value="content"
                :initial-edit-type="'markdown'"
                :preview-style="'vertical'"
                :height="'700px'"
            />
        </client-only>
        <button @click="getMarkdown">입력한 내용 확인하기</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "## 내용을 입력하세요...",
            isEditorLoaded: false
        };
    },
    methods: {
        getMarkdown() {
            if (!this.isEditorLoaded || !this.$refs.editor?.editorInst) {
                alert("에디터가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
                return;
            }
            const markdown = this.$refs.editor.editorInst.getMarkdown();
            alert("입력한 내용: " + markdown);
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs.editor?.editorInst) {
                console.log("✅ 에디터가 정상적으로 로드됨.");
                this.isEditorLoaded = true;
            } else {
                console.warn("⏳ 에디터 로딩이 지연됨. 다시 확인합니다.");
                setTimeout(() => {
                    if (this.$refs.editor?.editorInst) {
                        console.log("✅ 에디터가 로드 완료됨.");
                        this.isEditorLoaded = true;
                    } else {
                        console.error("❌ 에디터 로드 실패.");
                    }
                }, 500);
            }
        });
    }
};
</script>
