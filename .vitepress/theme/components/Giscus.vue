<template>
  <div class="giscus-wrapper">
    <div class="giscus"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { theme } = useData()

function loadGiscus() {
  const container = document.querySelector('.giscus-wrapper .giscus')
  if (!container) return

  container.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', theme.value.giscusRepo)
  script.setAttribute('data-repo-id', theme.value.giscusRepoId)
  script.setAttribute('data-category', theme.value.giscusCategory)
  script.setAttribute('data-category-id', theme.value.giscusCategoryId)
  script.setAttribute('data-mapping', theme.value.giscusMapping)
  script.setAttribute('data-strict', theme.value.giscusStrict)
  script.setAttribute('data-reactions-enabled', theme.value.giscusReactionsEnabled)
  script.setAttribute('data-emit-metadata', theme.value.giscusEmitMetadata)
  script.setAttribute('data-input-position', theme.value.giscusInputPosition)
  script.setAttribute('data-theme', theme.value.giscusTheme)
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
