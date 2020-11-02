<template>
  <div>
      {{message}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const message  = ref('tool')
        return {
            message
        }
    }
}
</script>

<style>

</style>