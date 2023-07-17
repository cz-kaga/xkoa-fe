<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
interface RegisterData{
  username: string,
  password: string,
}
const {t} = useI18n();
const data = ref<RegisterData>({username: "", password: ""});
const userlabel = ref(t("RegisterForm.username"));
const passwdlabel = ref(t("RegisterForm.password"));
</script>

<template>
  <a-form :model="data">
    <a-typography-title style="text-align: center">{{t("RegisterForm.title")}}</a-typography-title>
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
        <a-link href="/login">{{t("RegisterForm.loginLink")}}</a-link>
      </template>
    </a-form-item>
    <a-form-item>
      <div style="text-align: center">
        <a-button>{{t("RegisterForm.register")}}</a-button>
      </div>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>