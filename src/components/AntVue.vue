<template>
  <a-input v-model:value="value" placeholder="Basic usage">
    <template #prefix>
      <user-outlined type="user" />
    </template>
    <template #suffix>
      <a-tooltip title="Extra information">
        <info-circle-outlined style="color: rgb(0 0 0 / 45%);" />
      </a-tooltip>
    </template>
  </a-input>
</template>
<script lang="ts" setup>
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
const value = ref<string>('')
</script>

