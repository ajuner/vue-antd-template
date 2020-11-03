import { computed, h } from "vue";

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
    },
    render() {
        const { text }  = this
        return h('h1', {}, `render组件：${text}`)
    }
}