/**
 * Author：zhoushuanglong
 * Time：2017-08-29 19:27
 * Description：js demo index
 */

import { goToMobile, imgPop } from '../../libs/js/utils'
import banner from './index/banner'

$(function () {
    goToMobile('http://www.baidu.com')
    imgPop('#imgPopBtn')
    banner()
})
