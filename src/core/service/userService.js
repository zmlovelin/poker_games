import Vue from 'vue'
import {FIRST_USER_MARGIN_TOP, USER_AREA_HEIGHT, USER_PADDING} from "../../shared/config";

export default {

    getLoginUser(userCode, password) {
        let data = {
            id: '123awasd',
            name: 'guanyj',
            money: 123,
            pokes: [23, 14, 4],
            left: USER_PADDING,
            top: FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4
        }
        return new Promise(resolve => {
            resolve({code: 0, data, msg: '请求成功'})
        })
    }
}
