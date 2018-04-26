import userService from './userService';

const servers = {
    userService
}

export default {
    install(Vue) {
        Object.keys(servers).forEach(key => {
            Vue.prototype[`$${key}`] = servers[key];
        });
    }
}
