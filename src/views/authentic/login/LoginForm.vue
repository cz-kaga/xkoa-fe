<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import UserSecurity from "../../../api/UserSecurity.ts";
import {Message} from "@arco-design/web-vue";
interface LoginData{
  username: string,
  password: string,
}
const {t} = useI18n();
const data = ref<LoginData>({username: "", password: ""});
const userLabel = ref(t("AUTHENTIC.LOGIN_FORM.USERNAME"));
const passwdLabel = ref(t("AUTHENTIC.LOGIN_FORM.PASSWORD"));
function handleLogin(){
  UserSecurity.postLogin(data.value.username, data.value.password).then(
      (response) => {
        switch (response.status){
          case 200: {
            Message.success(t("AUTHENTIC.LOGIN_FORM.SUCCESSFUL_LOGIN"));
            break;
          }
          case 500: {
            Message.error(t("RegisterForm.unknownRegisterFailure"));
            break;
          }
        }
      }).catch((error)=>{
        if (error.response.status == 401){
          Message.error(t("AUTHENTIC.LOGIN_FORM.INVALID_ACCOUNT_OR_PASSWORD"));
        }
        else {
          Message.error(t("RegisterForm.unknownRegisterFailure"));
        }
  })
}
</script>

<template>
  <a-form :model="data">
    <a-form-item>
      <a-col :offset="6">
        <a-typography-title>{{t("AUTHENTIC.LOGIN_FORM.TITLE")}}</a-typography-title>
      </a-col>
    </a-form-item>
    <a-form-item field="name" :label="userLabel">
      <a-input
          v-model="data.username"
      />
    </a-form-item>
    <a-form-item field="password" :label=passwdLabel>
      <a-input-password
          v-model="data.password"
      />
      <template #extra>
        <a-link href="/register">{{t("AUTHENTIC.LOGIN_FORM.REGISTER_LINK")}}</a-link>
      </template>
    </a-form-item>
    <a-form-item>
      <a-col :offset="8">
        <a-button type="primary" @click="handleLogin">{{t("AUTHENTIC.LOGIN_FORM.LOGIN")}}</a-button>
      </a-col>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>