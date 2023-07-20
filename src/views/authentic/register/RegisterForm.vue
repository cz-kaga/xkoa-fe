<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import UserSecurity from "../../../api/UserSecurity.ts"
import {Message} from "@arco-design/web-vue";
interface RegisterData{
  username: string,
  password: string,
  email: string,
  phone: string
}
const {t} = useI18n();
const data = ref<RegisterData>({username: "", password: "", email: "", phone: ""});
const userLabel = ref(t("AUTHENTIC.REGISTER_FORM.USERNAME"));
const passwdLabel = ref(t("AUTHENTIC.REGISTER_FORM.PASSWORD"));
const phoneLabel = ref(t("AUTHENTIC.REGISTER_FORM.PHONE"));
const emailLabel = ref(t("AUTHENTIC.REGISTER_FORM.EMAIL"));
function handleRegister(){
  UserSecurity.postRegister(data.value.username, data.value.password, data.value.email, data.value.phone).then(
      (response) => {
        switch (response.status){
          case 200: {
            Message.success(t("AUTHENTIC.REGISTER_FORM.SUCCESSFUL_REGISTER"));
            break;
          }
          case 401: {
            Message.error(t("AUTHENTIC.REGISTER_FORM.ACCOUNT_EXISTED"));
            break;
          }
          case 500: {
            Message.error(t("AUTHENTIC.REGISTER_FORM.UNKNOWN_ERROR"));
            break;
          }
        }
  }).catch(()=>{
    Message.error(t("AUTHENTIC.REGISTER_FORM.UNKNOWN_ERROR"));
  })
}
</script>

<template>
  <a-form :model="data">
    <a-typography-title style="text-align: center">{{t("AUTHENTIC.REGISTER_FORM.TITLE")}}</a-typography-title>
    <a-form-item field="name" :label="userLabel">
      <a-input
          v-model="data.username"
      />
    </a-form-item>
    <a-form-item field="password" :label=passwdLabel>
      <a-input-password
          v-model="data.password"
      />

    </a-form-item>
    <a-form-item field="email" :label="emailLabel">
      <a-input
          v-model="data.email"
      />
    </a-form-item>
    <a-form-item field="phone" :label="phoneLabel">
      <a-input
          v-model="data.phone"
      />
      <template #extra>
        <a-link href="/login">{{t("AUTHENTIC.REGISTER_FORM.LOGIN_LINK")}}</a-link>
      </template>
    </a-form-item>
    <a-form-item>
      <div style="text-align: center">
        <a-button @click="handleRegister">{{t("AUTHENTIC.REGISTER_FORM.REGISTER")}}</a-button>
      </div>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>