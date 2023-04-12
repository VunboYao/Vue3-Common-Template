<template>
  <div>
    <HelloWorld ref="modal" foo="Ok">
      <template #header="{customAttr}">
        <h2>999</h2>
        <span>{{ customAttr }}</span>
      </template>
      888
    </HelloWorld>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { key } from '@/const/symbolKey'

provide(key, 'Hello Boy')

const modal = ref<InstanceType<typeof HelloWorld>>()
onMounted(() => {
  setTimeout(() => {
    modal.value?.open()
  }, 2000)
})
</script>
