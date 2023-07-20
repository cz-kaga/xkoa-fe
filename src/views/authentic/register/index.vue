<script setup lang="ts">

import RegisterForm from "./RegisterForm.vue";
</script>

<template>
  <a-row style="margin-top: 5%">
    <a-col :flex="4"></a-col>
    <a-col :flex="4">
      <RegisterForm/>
    </a-col>
    <a-col :flex="4"></a-col>
  </a-row>
</template>

<style scoped>

</style>