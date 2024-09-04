<script setup>
import sdk from '@stackblitz/sdk';
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

    // sdk.embedGithubProject('embed', 'vitejs/vite/tree/main/packages/create-vite/template-vanilla', {
    //     height: 400,
    //     openFile: 'index.html',
    // });

})


</script>


<template>
    <div id="cnt">

        <!-- <div class="embed"></div> -->
        <iframe src="https://stackblitz.com/edit/stackblitz-starters-d2yjgh?embed=1&file=index.html"></iframe>
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
