<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";
const {t} = useI18n();
const data = ref<LoginData>({username: "", password: ""});
const nameLabel = t("ORGANIZATION.REGISTER_FORM_NAME");
</script>

<template>
  <a-form :model="data">
    <a-form-item>
      <a-col :offset="6">
        <a-typography-title>{{t("AUTHENTIC.LOGIN_FORM.TITLE")}}</a-typography-title>
      </a-col>
    </a-form-item>
    <a-form-item field="name" :label="nameLabel">
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