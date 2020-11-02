<template>
  <div>
      {{message}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const message  = ref('home')
        return {
            message
        }
    }
}
</script>

<style>

</style>