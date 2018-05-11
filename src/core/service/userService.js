import Vue from 'vue'
import {FIRST_USER_MARGIN_TOP, USER_AREA_HEIGHT, USER_PADDING, DRAG_BAR_HEIGHT} from "../../shared/config";
const prefix = '/api/user';
const prefixUrl = '/api/register'
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
     * 注册账号
     * @param body
     * @returns {Promise<any>}
     */
    getUserRegister (body) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefixUrl}/save`, body).then(result => {
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

    getUserRegisterLogin (body) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefixUrl}/login`, body).then(result => {
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
                    resolve(result.body.data);
                } else {
                    reject(result.body);
                }
            }).catch(error => {
                alert(error);
            })
        })
    },
    /**
     * 快速加入房间
     * @param account
     * @returns {Promise<any>}
     */
    qkJoinRoom(account) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/quickJoinRoom`, {account}).then(result => {
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
     * 自由选择房间之后
     * @param body
     * @returns {Promise<any>}
     */
    freeJoinRoom(body) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/joinRoom`, body).then(result => {
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
     * 获取所有的房间列表
     * @param body
     * @returns {Promise<any>}
     */
    getRoomList(body) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/getRoomList`, body).then(result => {
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
     * 轮询
     * @param data
     * @returns {Promise<any>}
     */
    refreshGameInfo(data) {
        return new Promise((resolve, reject) => {
            Vue.http.post(`${prefix}/refreshGameInfo`, {data}).then(result => {
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
