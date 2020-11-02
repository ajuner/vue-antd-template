<template>
    <div class="app-login">
        <div class="app-login-model">
            <p class="app-login-title">I need a title</p>
            <a-form :wrapper-col="wrapperCol">
                <a-form-item label="username" v-bind="validateInfos.username">
                    <a-input v-model:value="userRef.username" />
                </a-form-item>
                <a-form-item label="password" v-bind="validateInfos.password">
                    <a-input :type="passwordType.value" v-model:value="userRef.password" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" block @click="login">login</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>


<script>
import { reactive, ref, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useForm } from '@ant-design-vue/use';
export default {
  setup() {
    const userRef = reactive({
        username: 'admin',
        password: '123456'
    })
    const passwordType = ref('password')
    const rulesRef = reactive({
        username: [
            {
                required: true,
                message: 'Please input username'
            }
        ],
        password: [
            {
                required: true,
                message: 'Please input password'
            }
        ]
    });
    const { resetFields, validate, validateInfos } = useForm(userRef, rulesRef);
    const store = useStore()
    const router = useRouter()
    const login = () => {
        validate().then(()=>{
            store.dispatch('user/login', toRaw(userRef)).then(()=>{
                router.push('/main')
            })
        })
    }
    return {
      wrapperCol: { span: 24 },
      validateInfos,
      resetFields,
      userRef,
      login,
      passwordType
    };
  },
};
</script>

<style scoped lang="less">
.app-login {
    height: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right,  rgb(138,135,180),rgb(243,223,216));
    .app-login-model{
        width: 30%;
        margin-top: 180px;
        height: 360px;
        background-color: rgba(250,250,250,0.2);
        padding: 20px 40px;
        border-radius: 6px;
        .app-login-title {
            font-size: 24px;
            font-weight: bold;
        }
    }
}
</style>