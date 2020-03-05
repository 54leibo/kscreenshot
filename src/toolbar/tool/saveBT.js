import { css, remove, typeChecking } from '../../util'
import drawMiddleImage from '../middleImage/drawMiddleImage'
import download from '../download'
import endAndClear from '../endAndClear'
import img from '../../assets/imgs/save.svg'

export default function saveBT (me) {
  let saveBT = document.createElement('span')
  saveBT.id = 'kssSaveBT'
  saveBT.className = 'kssToolbarItemBT'
  saveBT.title = '保存截图'

  let saveImg = document.createElement('img')
  saveImg.className = 'kssToolbarItemImg'
  saveImg.src = img
  me.quitBT = saveImg

  saveBT.appendChild(saveImg)

  saveBT.addEventListener('click', async function () {
    me.isEdit = true

    const lastShot = me.snapshootList[me.snapshootList.length - 1]
    if(typeof me.saveCB === 'function') {
      await me.saveCB(lastShot)
    } else {
      await download(me)
    }
    typeChecking(me.endCB) === '[object Function]' && me.endCB(lastShot)
    endAndClear(me)
  })

  return saveBT
}
