/**
 * @file useTouch
 * @author VunboYao
 * @date 2023/4/25 9:44
 */

export default function useTouch(element: Ref<HTMLElement | null>, callback: (result: boolean | 0) => void) {
  let start = 0, end = 0
  onMounted(() => {
    const minDistance = Math.ceil((element.value?.offsetWidth || 375) / 7)

    element.value?.addEventListener('touchstart', (e) => {
      start = e.touches[0].clientX
    })

    element.value?.addEventListener('touchmove', (e) => {
      const clientX = e.changedTouches[0].clientX
      element.value!.style.cssText = `left:${clientX - start}px`
    })

    element.value?.addEventListener('touchend', (e) => {
      end = e.changedTouches[0].clientX
      // 滑动是否超过一个日期值
      const result = end - start

      // 超出一格日期的宽度，则执行下一个月选择
      if (result < 0 && Math.abs(result) > minDistance) {
        callback(true)
      } else if (result > 0 && result > minDistance) {
        callback(false)
      }

      element.value!.style.cssText = 'left:0'
    })
  })
}
