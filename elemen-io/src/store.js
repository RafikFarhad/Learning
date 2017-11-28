import Vuex from 'vuex'
import Vue from 'vue'
import Auth from './axios/axios-auth.js'
import Axios from './axios/axios.js'
import router from './router'

Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        token: '',
        user: null,
        userId: null
    },
    getters: {
        isAuthenticated (state) {
            return state.token !== ''
        },
        getUser (state) {
            return state.user
        }
    },
    mutations: {
        authUser (state, userData) {
            state.token = userData.authData.idToken
            state.userId = userData.authData.localId
            state.user = userData.userData
        }
    },
    actions: {
        signup ({commit}, formData) {
            Auth.post('/signupNewUser?key=' + 'AIzaSyCrwGUz6543hG1W6_8k45MX0hL-HG2igHk', {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            }).then((res) => {
                var authData = res.data
                var userData = Object.assign({}, formData)
                delete userData.loading
                userData.userId = authData.localId
                Axios.post('/user.json', userData).then((res) => {
                    commit('authUser', {
                        authData,
                        userData
                    })
                    // console.log(res)
                    router.push({
                        name: 'dashboard'
                    })
                }).catch((error) => {
                    console.log(error)
                }).then(() => {
                    formData.loading = false
                })
            }).catch((error) => {
                console.log('error is: ' + error)
            })
        },
        login ({commit}, formData) {
            Auth.post('/verifyPassword?key=' + 'AIzaSyCrwGUz6543hG1W6_8k45MX0hL-HG2igHk', {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            }).then((res) => {
                var authData = res.data
                var userData = Object.assign({}, formData)
                delete userData.loading
                userData.userId = authData.localId
                Axios.get('/user.json').then((res) => {
                    var data = res.data
                    for (let i in data) {
                        if (data[i].userId === authData.localId) {
                            userData = data[i]
                            break
                        }
                    }
                    commit('authUser', {
                        authData,
                        userData
                    })
                    // console.log(res)
                    router.push({
                        name: 'dashboard'
                    })
                }).catch((error) => {
                    console.log(error)
                }).then(() => {
                    formData.loading = false
                })
            }).catch((error) => {
                console.log('error is: ' + error)
            })
        }
    }
})

export default store
