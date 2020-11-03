import { computed } from "vue";

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
        const { text }  =this
        return <h1>
            jsx组件: {text}
        </h1>
    }
}