<template>
  <div>
    <HelloWorld
      ref="modal"
      foo="Ok"
      @change="id => 12"
    >
      <template #header="{body, age}">
        <h2>999 {{ body }} => {{ age }}</h2>
      </template>
      888
    </HelloWorld>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { key } from '@/const/symbolKey'

provide(key, 'Hello Boy')

const modal = ref<InstanceType<typeof HelloWorld>>(null)
onMounted(() => {
  setTimeout(() => {
    modal.value?.open()
  }, 2000)
})
</script>
