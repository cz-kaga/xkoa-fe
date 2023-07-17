<script setup lang="ts">

import RegisterForm from "../components/Login/RegisterForm.vue";
</script>

<template>
  <a-row style="margin-top: 10%">
    <a-col :flex="4"></a-col>
    <a-col :flex="4">
      <RegisterForm/>
    </a-col>
    <a-col :flex="4"></a-col>
  </a-row>
</template>

<style scoped>

</style>