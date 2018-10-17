import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

import index from './module/index';
import detail from './module/detail';
import img from './module/img';
import quotation from './module/Quotation';
import city from "./module/city"
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    index,
    detail,
    img,
    quotation,
    city
  },
  plugins: [Logger()]
});
