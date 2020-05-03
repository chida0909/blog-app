import firebase from '@/plugins/firebase'

export const state = () => ({
  isSignedIn: false
})

export const mutations = {
  setSignInState(state, isSignedIn){
    state.isSignedIn = isSignedIn
  }
}

export const actions = {
  signIn({ commit }, { email, password }){
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit('setSignInState', true)
        console.log('OK')
        this.$router.push('/')
      })
      .catch((error) => {
        commit('setSignInState', false)
        console.log('NG', error)
    })
  }
}

export const getters = {
  isAuthenticated: state => !!state.isSignedIn
}
