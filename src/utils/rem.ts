(function (win, document) {
  function setFontSize() {
    const winWidth = document.documentElement.clientWidth || document.body.clientWidth || win.screen.width
    document.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px'
  }

  const eventName = 'onorientationchange' in win ? 'orientationchange' : 'resize'
  let timer: any
  win.addEventListener(eventName, function () {
    clearTimeout(timer)
    timer = setTimeout(setFontSize, 300)
  }, false)
  setFontSize()
})(window, document)

