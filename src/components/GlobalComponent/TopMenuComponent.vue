<script setup lang="ts">
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
  <a-menu mode="horizontal" >
    <a-menu-item key="logoname" disabled>{{ t('TopMenu.logoname') }}</a-menu-item>
    <a-menu-item key="info">{{ t('TopMenu.information') }}</a-menu-item>
    <a-menu-item key="org">{{ t('TopMenu.organizations') }}</a-menu-item>
    <a-menu-item key="forum">{{ t('TopMenu.forum') }}</a-menu-item>
    <a-menu-item key="tool">{{ t('TopMenu.usefulTools') }}</a-menu-item>
    <a-menu-item key="user">{{ t('TopMenu.userCenter') }}</a-menu-item>
  </a-menu>
</template>

<style scoped>

</style>