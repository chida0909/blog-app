import firebase from '@/plugins/firebase'

export const state = () => ({
  isSignedIn: false,
  // message: 'hello vuex'
})

export const mutations = {
  setSignInState(state, isSignedIn: boolean){
    state.isSignedIn = isSignedIn
  }
}

export const actions = {
  async signIn({ commit }, { email, password }){
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit('setSignInState', true)
        console.log('OK')
        this.$router.push('/')
      })
      .catch((error) => {
        commit('setSignInState', false)
        alert('ログインできませんでした')
    })
  }
}

export const getters = {
  isAuthenticated: state => !!state.isSignedIn
}
