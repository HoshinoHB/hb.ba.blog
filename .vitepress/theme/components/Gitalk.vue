<template>
  <div class="giscus-container">
    <script
      src="https://giscus.app/client.js"
      data-repo="HoshinoHB/hb.ba.blog"
      data-repo-id="R_kgDOTMEI6A"
      data-category="Announcements"
      data-category-id="DIC_kwDOTMEI6M4CltSJ"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="auto"
      data-lang="zh-CN"
      crossorigin="anonymous"
      async
    ></script>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 当路由变化时重新加载 giscus
watch(
  () => route.path,
  () => {
    reloadGiscus()
  },
)

// 重新加载 giscus 脚本
function reloadGiscus() {
  // 移除旧的 iframe
  const giscusFrame = document.querySelector('iframe.giscus-frame')
  if (giscusFrame) {
    giscusFrame.remove()
  }

  // 重新加载脚本
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

  const container = document.querySelector('.giscus-container')
  if (container) {
    container.appendChild(script)
  }
}
</script>

<style scoped lang="less">
.giscus-container {
  margin-top: 24px;
}

// Giscus 主题适配
:deep(.giscus-frame) {
  width: 100%;
}
</style>
