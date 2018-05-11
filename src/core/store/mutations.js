/**
 * Created by xiaoconghu on 2018/4/1.
 */
import * as types from "./types";
import getters from "./getters";

const state = {
    roomInfo: null,
};
const mutations = {
    [types.ROOM_INFO](state, param) {
        state.roomInfo = param;
    },

};
export default {
    state,
    mutations,
    getters
}
