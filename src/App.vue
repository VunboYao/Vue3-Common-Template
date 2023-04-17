<template>
  <div>
    <HelloWorld
      ref="modal"
      foo="Ok"
    />
  </div>
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { key } from '@/const/symbolKey'

import {
  ref, reactive, computed
} from 'vue'

provide(key, 'Hello Boy')
const arr = [1, 2, 3]
const modal = ref<InstanceType<typeof HelloWorld>>()
onMounted(() => {
  setTimeout(() => {
    modal.value?.open()
  }, 2000)
})
const obj2 = {
  foo: 123
}

</script>

<style lang="less">
div {
  ul > li {
    display: flex;
    order: 1;
    width: 200px;
    height: 200px;
    margin: 10px;
    color: darkblue;
    list-style-type: none;
    pointer-events: all;
    cursor: pointer;
    background: #777;
    border: 1px solid #CCC;
    box-shadow: antiquewhite;
  }
}
</style>
