<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {IconRelation, IconSettings} from "@arco-design/web-vue/es/icon";

const {t} = useI18n();
</script>

<template>
  <a-menu
      :style="{ height: '91vh' }"
      breakpoint="xl"
  >
    <a-sub-menu key="org" >
      <template #icon><icon-relation /></template>
      <template #title>{{t("ADMIN.SIDE_MENU.ORGANIZATION.TITLE")}}</template>
      <a-menu-item key="category">{{t("ADMIN.SIDE_MENU.ORGANIZATION.CATEGORY")}}</a-menu-item>
      <a-menu-item key="management">{{t("ADMIN.SIDE_MENU.ORGANIZATION.MANAGEMENT")}}</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="system" >
      <template #icon><icon-settings /></template>
      <template #title>{{t("ADMIN.SIDE_MENU.SYSTEM.TITLE")}}</template>
      <a-menu-item key="tools">{{t("ADMIN.SIDE_MENU.SYSTEM.TOOLS")}}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style scoped>

</style>