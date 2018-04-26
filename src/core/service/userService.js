import Vue from 'vue'

export default {

    getLoginUser(userCode, password) {
        let data = {
            id: '123awasd',
            name: 'guanyj',
            money: 123,
            pokes: [23, 14, 4]
        }
        return new Promise(resolve => {
            resolve({code: 0, data, msg: '请求成功'})
        })
    }
}
