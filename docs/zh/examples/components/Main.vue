<script setup>

import { ref, onMounted } from "vue";





const props = defineProps({
    text: {
        type: String,
        default: '🚀运行示例'
    },
    refreshText: {
        type: String,
        default: '刷新'
    },
    closeText: {
        type: String,
        default: '关闭'
    },
    title: {
        type: String,
        default: ''
    },
    src: {
        type: String,
        default: ''
    }
})





const codepen = ref(null);

onMounted(() => {
    console.log('ww');
})


</script>


<template>
    <div id="cnt">
        <iframe
            src="https://stackblitz.com/edit/ajiho-treeview-n3vgv8?embed=1&file=Tree.Base.addNode.Append.Parent.html&theme=light&initialPath=/Tree.Base.addNode.Append.Parent.html&showSidebar='true'"></iframe>
    </div>

</template>

<style>
/* 覆盖vitepress的样式 */
/* .vp-doc.container {
    padding: 0;
    max-width: 100%;
} */


#cnt {
    height: calc(100vh - 64px);
    width: 100%;

    iframe {
        display: block;
        border: none;
        width: 100%;
        height: 100%;
    }
}
</style>
