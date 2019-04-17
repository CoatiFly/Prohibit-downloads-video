import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 应用初始状态
const state = {
  isPC: '',
}

// 定义所需的 getter
const getters = {

}

// 定义所需的 mutations
const mutations = {
  setIsPC(state,type) {
    state.isPC = type;
  },
}

// 定义所需的 actions
const actions = {

}


// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})