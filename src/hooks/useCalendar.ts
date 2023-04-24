export interface iDaysMap {
  value: number | string
  className: string
  selected?: boolean
}

export default function () {
  const weeksHeader = ['日', '一', '二', '三', '四', '五', '六']

  const year = ref(new Date().getFullYear())
  const month = ref(new Date().getMonth() + 1)
  const day = ref(new Date().getDate())
  // 存储今年的日期，常量
  const currentDay = `${year.value}-${month.value}-${day.value}`

  // 根据年月日，生成符合样式的当月日历
  function generate() {
    /**
     * 拷贝一份年月日信息，生成日历使用
     * 拷贝原因：由于需要计算每个月的最后一天，即每个月多少天，不能使用原始值
     */
    const innerDay = day.value
    let innerYear = year.value
    let innerMonth = month.value

    // 每个月的第一天星期几
    const firstDayEachMonth = new Date(`${innerYear}-${innerMonth}-1`).getDay()

    /**
     * 计算每个月的最后一天：需要设置月份+1后，通过设置setDate(0)来获取
     * 当月份为12月时，设置月份+1的效果是：年份+1， 月份 === 0
     */
    if (innerMonth === 12) {
      /**
       * 获取2022-12-23 的最后一天
       * 即设置日期为 2023年1月
       */
      innerMonth = 0
      innerYear += 1
    }

    // 通过将月份改为下个月，设置日期为0，获取上个月的最后一天
    const dateObj = new Date(`${innerYear}-${innerMonth + 1}`)
    dateObj.setDate(0)
    // 每个月的最后一天
    const lastDateEachMonth = dateObj.getDate()
    // const lastDayEachMonth = lastDay.getDay()

    const daysMap: iDaysMap[] = []
    // 每个月第一天对应的星期几，前边填充空数据
    for (let i = 0; i <= firstDayEachMonth - 1; i++) {
      daysMap.push({
        value: '',
        className: ''
      })
    }

    // 根据最后一天，填充对应天数的数据
    for (let i = 1; i <= lastDateEachMonth; i++) {
      daysMap.push({
        value: i,
        // 展示类名，如果比今天小的日期，填充一个c-old-day类名
        className: i < innerDay ? 'c-old-day c-day' : 'c-day',
        selected: false
      })
    }

    return daysMap
  }

  function nextMonth() {
    month.value += 1

    if (month.value === 13) {
      month.value = 1
      year.value += 1
    }
    return generate()
  }

  function prevMonth() {
    month.value -= 1
    if (month.value === 0) {
      month.value = 12
      year.value -= 1
    }
    return generate()
  }

  return {
    weeksHeader,
    year,
    month,
    day,
    currentDay,
    generate,
    nextMonth,
    prevMonth
  }
}
