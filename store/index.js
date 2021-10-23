export const state = () => ({
  urlAPI: process.env.api,
  course: {},
  division: {}
})

export const mutations = {
  setCourse (state, obj) {
    state.course = obj
  },
  setProgram (state, obj) {
    state.division = obj
  }
}
