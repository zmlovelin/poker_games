import Vue from 'vue'
import {FIRST_USER_MARGIN_TOP, USER_AREA_HEIGHT, USER_PADDING, DRAG_BAR_HEIGHT} from "../../shared/config";
const prefix = '/api/user';
export default {


    getLoginUser(userCode, password) {
        let data = {
            id: '123awasd',
            realname: 'guanyj',
            score: 123,
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
                    resolve(JSON.parse(result.body.data));
                } else {
                    reject(result.body);
                }
            }).catch(error => {
                alert(error);
            })
        })
    },
    /**
     * 获取房间等级 以及分数
     * @param account
     * @returns {Promise<any>}
     */
    getRoomLevel(account) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/getRoomLevel`, {account}).then(result => {
                if (result.body.code === 0) {
                    resolve(JSON.parse(result.body.data));
                } else {
                    reject(result.body);
                }
            }).catch(error => {
                alert(error);
            })
        })
    },
    /**
     * 保存所选的房间信息
     * @param body
     * @returns {Promise<any>}
     */
    saveRoomInfo(body) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/saveRoomInfo`, body).then(result => {
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

    /**
     * 获取房间信息以及房间人员信息
     * @param roomId
     * @returns {Promise<any>}
     */
    getRoom(body) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/getRoom`, body).then(result => {
                if (result.body.code === 0) {
                    resolve(JSON.parse(result.body.data));
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
