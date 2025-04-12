function font() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 38.4 + 'px'
}
font()
window.onresize = font
