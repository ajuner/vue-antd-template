<template>
  <div>
      {{message}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const message  = ref('nothing-2')
        return {
            message
        }
    }
}
</script>

<style>

</style>