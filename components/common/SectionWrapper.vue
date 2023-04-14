<template>
  <div :id="id" :class="`container m-auto ${classNames} px-8`">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      required: true,
      type: String
    },
    classNames: {
      default: '',
      type: String
    },
    size: {
      default: 'm',
      type: String
    }
  }
})
</script>
