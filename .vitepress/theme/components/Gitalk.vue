<template>
  <div class="giscus-wrapper">
    <div class="giscus"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

function loadGiscus() {
  const container = document.querySelector('.giscus-wrapper .giscus')
  if (!container) return

  container.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'HoshinoHB/hb.ba.blog')
  script.setAttribute('data-repo-id', 'R_kgDOTMEI6A')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOTMEI6M4CltSJ')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'auto')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  container.appendChild(script)
}

onMounted(() => {
  nextTick(() => loadGiscus())
})

watch(
  () => route.path,
  () => {
    nextTick(() => loadGiscus())
  },
)
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 24px;
  padding: 0 16px;
}
</style>
