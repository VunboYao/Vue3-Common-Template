<template>
  <input
    ref="el"
    v-model="year"
    type="text"
    @input="handleChange"
  >
  <slot name="header" custom-attr="组件内部的数据">
    {{ slots }}
  </slot>
  <slot>{{ slots }}</slot>
</template>

<script setup lang="ts">
import { key, noProvideKey } from '@/const/symbolKey'

const props = defineProps<{
  foo: string
  bar?: number
}>()

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const year: Ref<string | number> = ref(200)
year.value = '123'

function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}

const res = inject(key, 'defaultValue')
const res2 = inject(noProvideKey, 'defaultValue')

const el = ref<HTMLInputElement | null>(null)
onMounted(() => {
  el.value?.focus()
})

const open = () => {
  year.value = 666
}
const usebanner = 1

const slots = useSlots()
const attrs = useAttrs()

defineExpose({
  open,
  usebanner,
})
</script>

<style scoped>
div {
  display: flex;
  order: 1;
  height: 200px;
  padding: 20px;
  color: darkblue;
  list-style-type: none;
  background: #777;
  border: 1px solid #CCC;
  box-shadow: antiquewhite;
}
</style>
