import {  computed, defineComponent } from "vue";

export default defineComponent({
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
        return () => <h1>
            function defineComponent用法组件: {text.value}
        </h1>
    }
})