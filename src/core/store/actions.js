/**
 * Created by xiaoconghu on 2018/4/1.
 */
import * as types from './types'

export default {
    roomInfo({commit}, param) {
        commit(types.ROOM_INFO, param)
    }

}
