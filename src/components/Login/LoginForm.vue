<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
interface LoginData{
  username: string,
  password: string,
}
const {t} = useI18n();
const data = ref<LoginData>({username: "", password: ""});
const userlabel = ref(t("LoginForm.username"));
const passwdlabel = ref(t("LoginForm.password"));
</script>

<template>
  <a-form :model="data">
    <a-form-item>
      <a-col :offset="6">
        <a-typography-title>{{t("LoginForm.title")}}</a-typography-title>
      </a-col>
    </a-form-item>
    <a-form-item field="name" :label="userlabel">
      <a-input
          v-model="data.username"
      />
    </a-form-item>
    <a-form-item field="password" :label=passwdlabel>
      <a-input-password
          v-model="data.password"
      />
      <template #extra>
        <a-link href="/register">{{t("LoginForm.registerLink")}}</a-link>
      </template>
    </a-form-item>
    <a-form-item>
      <a-col :offset="8">
        <a-button type="primary">{{t("LoginForm.login")}}</a-button>
      </a-col>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>