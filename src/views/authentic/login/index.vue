<script setup lang="ts">

import LoginForm from "./LoginForm.vue";
</script>

<template>
  <a-row style="margin-top: 10%">
    <a-col :flex="4"></a-col>
    <a-col :flex="4">
      <LoginForm/>
    </a-col>
    <a-col :flex="4"></a-col>
  </a-row>

</template>

<style scoped>

</style>