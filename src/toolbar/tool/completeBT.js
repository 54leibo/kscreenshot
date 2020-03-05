import { css, remove, typeChecking } from '../../util'
import drawMiddleImage from '../middleImage/drawMiddleImage'
import copy from '../copy'
import download from '../download'
import endAndClear from '../endAndClear'
import img from '../../assets/imgs/complete.svg'

export default function completeBT (me) {
    let completeBT = document.createElement('span')
    completeBT.id = 'kssCompleteBT'
    completeBT.className = 'kssToolbarItemBT'
    completeBT.title = '完成截图'

    css(completeBT, {
        width: '40px',
        'line-height': '28px'
    })

    let completeImg = document.createElement('img')
    completeImg.className = 'kssToolbarItemImg'
    completeImg.src = img
    me.quitBT = completeImg

    completeBT.appendChild(completeImg)

    completeBT.addEventListener('click', async function () {
        me.isEdit = true

        const lastShot = me.snapshootList[me.snapshootList.length - 1]
        copy(me, lastShot)
        me.needDownload === true && (await download(me))
        typeChecking(me.endCB) === '[object Function]' && me.endCB(lastShot)
        endAndClear(me)
    })

    return completeBT
}
