<template>
  <canvas
    ref="canvas"
    class="fixed inset-0 z-30"
    :width="size.w"
    :height="size.h"
    @mousemove="onMove"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import CanvasManager from '~/components/homepage/utils/CanvasManager'
import themes from '~/const/themes'

export default defineComponent({
  setup() {
    let canvasManager: any
    const canvas = ref(null)
    const size = reactive({
      w: 500,
      h: 500
    })

    onMounted(() => {
      size.w = window.innerWidth
      size.h = window.innerHeight

      if (canvas.value) {
        canvasManager = new CanvasManager(canvas.value, {
          a: themes.a.primary,
          b: themes.a.secondary,
          c: themes.a.tertiary
        })
      }
    })

    function onMove(e: any) {
      if (canvasManager) {
        canvasManager.draw(e.clientX, e.clientY)
      }
    }

    return {
      canvas,
      size,
      onMove
    }
  }
})
</script>
