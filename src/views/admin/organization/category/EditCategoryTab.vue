<script setup lang="ts">
import { IconEdit, IconDelete } from '@arco-design/web-vue/es/icon';
import OrganizationAdmin from "@/api/admin/OrganizationAdmin.ts";
import {Category} from "@/api/admin/OrganizationAdmin.ts";
import {ref} from "vue";
import {useI18n} from "vue-i18n";
const {t} = useI18n();
const data = ref<Category[]>();
OrganizationAdmin.getAllCategory().then(
    (response)=>{
      if (response.status == 200){
        data.value = response.data;
      }
})
const openInsertForm = ref(false);
const insertData = ref<Category>({name:"",description:"",gmt_create:""});
const categoryTitleLabel = t("ADMIN.ORGANIZATION.CATEGORY.INSERT_SHEET_TITLE");
const categoryNameLabel = t("ADMIN.ORGANIZATION.CATEGORY.INSERT_SHEET_NAME");
const categoryDescriptionLabel = t("ADMIN.ORGANIZATION.CATEGORY.INSERT_SHEET_DESCRIPTION");
</script>

<template>
  <a-modal v-model:visible="openInsertForm" :title="categoryTitleLabel" @before-ok="handleBeforeOk">
    <a-form :model="insertData">
      <a-form-item field="name" :label="categoryNameLabel">
        <a-input v-model="insertData.name" />
      </a-form-item>
      <a-form-item field="name" :label="categoryDescriptionLabel">
        <a-input v-model="insertData.description" />
      </a-form-item>
    </a-form>
  </a-modal>
  <a-list :data="data" :bordered="false">
    <template #header>
      <a-row>
        <a-col :span="2">
        {{t("ADMIN.ORGANIZATION.CATEGORY.LIST_TITLE")}}
        </a-col>
        <a-col :offset="20" :span="2">
          <a-button
              @click="openInsertForm = true"
              type="primary"
          >
            {{t("ADMIN.ORGANIZATION.CATEGORY.INSERT_BUTTON")}}
          </a-button>
        </a-col>
      </a-row>

    </template>
    <template #empty>
      <a-empty />
    </template>
    <a-list-item v-for="category in data" :key="category.name">
      <a-list-item-meta
          :title="category.name"
          :description="category.description"
      >
      </a-list-item-meta>
      <template #actions>
        <a-button type="text" shape="circle">
          <template #icon>
            <icon-edit />
          </template>
        </a-button>
        <a-button type="text" shape="circle">
          <template #icon>
            <icon-delete />
          </template>
        </a-button>
      </template>
    </a-list-item>
  </a-list>
</template>

<style scoped>

</style>