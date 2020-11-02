<template>
  <div>
      {{message}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const message  = ref('form')
        return {
            message
        }
    }
}
</script>

<style>

</style>