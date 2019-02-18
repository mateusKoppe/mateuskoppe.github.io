import Vue from 'vue'

export const state = () => ({
  list: []
})

export const actions = {
  async loadList ({ commit, $api }) {
    const res = await this.$api.get('projects.json')
    commit('setList', res.data.projects)
  }
}

export const mutations = {
  setList (state, list) {
    state.list = list
  }
}
