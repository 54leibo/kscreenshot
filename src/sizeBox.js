import { css } from './util'

export default function updateSizeBox (me, width, height, top) {
  me.kssSizeBox.innerText = `${width} * ${height}`
  if(top < 20) {
    css(me.kssSizeBox,{top: '2px'})
  } else {
    css(me.kssSizeBox,{top: '-18px'})
  }
}
