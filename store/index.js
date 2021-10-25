export const state = () => ({
  urlAPI: process.env.SEGO_API_PUBLIC,
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
