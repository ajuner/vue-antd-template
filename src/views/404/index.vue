<template>
  <div>
      <a-button @click="goHome">Go Home</a-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    setup() {

        const router = useRouter()

        const goHome = () => {
            router.push('/')
        }

        return {
            goHome
        }
    }
}
</script>

<style>

</style>