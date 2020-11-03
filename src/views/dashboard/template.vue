<template>
  <h1>
      template 组件: {{text}}
  </h1>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        message: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const text = computed(() => {
            return props.message
        })
        return {
            text
        }
    }
}
</script>

<style>

</style>