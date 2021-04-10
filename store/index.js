export const state = () => ({
  urlAPI: process.env.api,
  course: {}
})

export const mutations = {
  setCourse (state, obj) {
    state.course = obj
  }
}
