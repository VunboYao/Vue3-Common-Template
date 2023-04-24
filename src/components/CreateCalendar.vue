<!--
 * @file: 日历生成器
 * @author: VunboYao
 * @date: 2023/04/24
-->
<template>
  <div class="wrap">
    <h2>{{ year }}-{{ month }}-{{ day }}</h2>
    <div class="c-header">
      <span v-for="item in weeksHeader" :key="item">{{ item }}</span>
    </div>
    <div class="c-month" @click.passive="onTouch">
      <span
        v-for="(item, index) in daysMap"
        :key="index"
        :class="onComputedClass(item)"
        @click="onSelected(item)"
      >{{ item.value }}</span>
    </div>

    <button @click="next">
      next
    </button>
    <button @click="prev">
      prev
    </button>
    <button @click="oldYear">
      prevYear
    </button>
  </div>
</template>

<script lang="ts" setup>
import useCalendar, { iDaysMap } from '@/hooks/useCalendar'

const {
  weeksHeader, day, month, year, currentDay,
  generate, prevMonth, nextMonth
} = useCalendar()

// 生成日历
const daysMap = ref(generate())

// 选择日期
const onSelected = (target: iDaysMap) => {
  if (!target.value) {
    return
  }
  target.selected = !target.selected
}

const onComputedClass = (item: any) => {
  return [
    item.className,
    `${year.value}-${month.value}-${item.value}` === currentDay ? 'c-today' : '',
    item.selected && 'c-active'
  ]
}

// !????
const onTouch = (e: Event) => {
  console.log(e)
}

// 递增
const next = () => {
  daysMap.value = nextMonth()
}

// 递减
const prev = () => {
  daysMap.value = prevMonth()
}

// 上一年
const oldYear = () => {
  year.value -= 1
  daysMap.value = generate()
}


</script>

<style scoped lang="less">
.c-header {
  display: flex;

  span {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 80px;
    border: 1px solid #CCC;
  }
}

.c-month {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}

.c-month span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.c-day:nth-child(7n) {
  color: #FFF;
  background-color: #666;
}

.c-day:nth-child(7n - 6) {
  color: #FFF;
  background-color: #666;
}

.c-active, .c-today {
  color: #FFF;
  background-color: #F00;
}
</style>
