<script setup lang="ts">
import {useI18n} from "vue-i18n";
const {t} = useI18n();
const headerTitle = t("ADMIN.HEADER.TITLE");
const headerSubTitle = t("ADMIN.HEADER.SUBTITLE");
</script>

<template>
  <a-page-header
      :show-back="false"
      :title=headerTitle
      :subtitle=headerSubTitle
  >
    <template #extra>
<!--      TODO: 动态头像+状态更新-->
      <a-dropdown trigger="hover">
        <a-avatar :size="32">
          Admin
        </a-avatar>
        <template #content>
          <a-doption>Option 1</a-doption>
          <a-doption>Option 2</a-doption>
          <a-doption>Option 3</a-doption>
        </template>
      </a-dropdown>

    </template>
  </a-page-header>
</template>

<style scoped>

</style>