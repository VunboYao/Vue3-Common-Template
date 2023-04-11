<template>
  <input
    ref="el"
    v-model="year"
    type="text"
    @input="handleChange"
  >
  <slot
    name="header"
    body="123"
    age="20"
  >
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

console.log(props.foo)
console.log(props.bar)

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
console.log(res, '>>.', res2)

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})

const open = () => {
  year.value = 666
  console.log('????')
}

const slots = useSlots()
const attrs = useAttrs()

defineExpose({
  open,
})
</script>

<style lang="scss" scoped>

</style>
