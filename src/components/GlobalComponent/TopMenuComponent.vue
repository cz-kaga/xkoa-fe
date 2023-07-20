<script setup lang="ts">
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
  <a-menu mode="horizontal" >
    <a-menu-item key="logoname" disabled>{{ t('TOP_MENU.LOGO_NAME') }}</a-menu-item>
    <a-menu-item key="info">{{ t('TOP_MENU.INFORMATION_CENTER') }}</a-menu-item>
    <a-menu-item key="org">{{ t('TOP_MENU.ORGANIZATION_CENTER') }}</a-menu-item>
    <a-menu-item key="forum">{{ t('TOP_MENU.FORUM') }}</a-menu-item>
    <a-menu-item key="tool">{{ t('TOP_MENU.USEFUL_TOOLS') }}</a-menu-item>
    <a-menu-item key="user">{{ t('TOP_MENU.USER_CENTER') }}</a-menu-item>
  </a-menu>
</template>

<style scoped>

</style>