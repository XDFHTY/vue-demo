const state = {
  cc: 1,
  cname: '张麻子',
  cvalue: '$55'
}

const mutations = {
  add(state,n) {
    state.cc += n
  },
  reduce(state) {
    state.cc -= 1
  }
}

export default {
  state,
  mutations
}
