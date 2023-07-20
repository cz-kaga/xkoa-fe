<script setup lang="ts">

import EditCategoryTab from "./EditCategoryTab.vue";
import AdminSideMenu from "@/components/GlobalComponent/AdminSideMenu.vue";
import AdminHeader from "@/components/GlobalComponent/AdminHeader.vue";
</script>

<template>
  <a-layout style="min-height: 100%">
    <a-layout-header>
      <AdminHeader />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <AdminSideMenu />
      </a-layout-sider>
      <a-layout-content>
        <EditCategoryTab />
      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<style scoped>
.side{
  height: 100%
}
</style>