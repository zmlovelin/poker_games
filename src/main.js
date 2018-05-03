// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/styles/index.stylus';
import VueWechatTitle from 'vue-wechat-title';
import service from './core/service'
import vs from 'vue-resource';

import checkboxGroup from './shared/checkbox-group'
import checkbox from './shared/checkbox'
import model from './shared/model'

Vue.use(vs);

const cxComponents = {
    cxCheckboxGroup: checkboxGroup,
    cxCheckbox: checkbox,
    cxModel:model
}

Object.keys(cxComponents).forEach(key => {
    Vue.component(key, cxComponents[key]);
});

Vue.use(VueWechatTitle);
Vue.use(service);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
