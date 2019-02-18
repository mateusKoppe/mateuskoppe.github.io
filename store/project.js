import Vue from 'vue'

export const state = () => ({
  list: []
})

export const actions = {
  async loadList ({ commit }) {
    const res = await this.$api.get('projects.json')
    commit('setList', res.data.projects)
  },
  async getItem ({}, slug) {
    const res = await this.$api.get(`projects/${slug}.json`)
    return res.data
  }
}

export const mutations = {
  setList (state, list) {
    state.list = list
  }
}
