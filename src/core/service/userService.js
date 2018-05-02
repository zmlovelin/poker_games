import Vue from 'vue'
import {FIRST_USER_MARGIN_TOP, USER_AREA_HEIGHT, USER_PADDING, DRAG_BAR_HEIGHT} from "../../shared/config";
const prefix = '/api/user';
export default {


    getLoginUser(userCode, password) {
        let data = {
            id: '123awasd',
            name: 'guanyj',
            money: 123,
            pokes: [23, 14, 4],
            left: USER_PADDING,
            top: FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT
        }
        return new Promise(resolve => {
            resolve({code: 0, data, msg: '请求成功'})
        })
    },

    /**
     * 获取当前玩家信息
     * @param account
     * @returns {Promise<any>}
     */
    getUserInfo(account) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/getUserInfo`, {account}).then(result => {
                if (result.body.code === 0) {
                    resolve(JSON.parse(result.body.user));
                } else {
                    reject(result.body);
                }
            }).catch(error => {
                alert(error);
            })
        })
    },
    /**
     * 游戏开局
     * @param roomId
     * @param accounts
     * @returns {Promise<any>}
     */
    beginGame(roomId, ...accounts) {
        let param = accounts.join(',');
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/beginGame`, {roomId, accounts: param}).then(result => {
                if (result.body.code === 0) {
                    resolve(result.body);
                } else {
                    reject(result.body);
                }
            }).catch(error => {
                alert(error);
            })
        })
    },


}
