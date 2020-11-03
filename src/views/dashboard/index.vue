<template>
  <tem :message=message></tem>
  <jsx :message=message></jsx>
  <render :message=message></render>
  <fun-define :message=message></fun-define>
  <fun-default :message=message></fun-default>
  <a-button type="primary" @click="add">点击</a-button>
</template>

<script>
import { ref } from 'vue'
import tem from './template'
import jsx from './jsx'
import render from './render'
import funDefine from './function'
import funDefault from './fun'
export default {
    components: {
        tem,
        jsx,
        render,
        funDefine,
        funDefault
    },
    setup() {

        const message  = ref(0)

        const add = () => {
            message.value++
        }

        return {
            message,
            add
        }
    }
}
</script>

<style>

</style>