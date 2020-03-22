export const state = () => ({
  counter: 0
})

export const mutations = {
  contents(state, counter) {
    state.counter = counter
  }
}
