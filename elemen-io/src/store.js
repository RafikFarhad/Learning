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
        userId: null,
        API: 'AIzaSyCrwGUz6543hG1W6_8k45MX0hL-HG2igHk'
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
        signup ({commit, state, dispatch}, formData) {
            Auth.post('/signupNewUser?key=' + state.API, {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            }).then((res) => {
                dispatch('storeUser', {
                    authData: res.data,
                    formData
                })
            }).catch((error) => {
                console.log('error is: ' + error)
            })
        },
        login ({commit, state, dispatch}, formData) {
            Auth.post('/verifyPassword?key=' + 'AIzaSyCrwGUz6543hG1W6_8k45MX0hL-HG2igHk', {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            }).then((res) => {
                dispatch('getUser', {
                    authData: res.data,
                    formData
                })
            }).catch((error) => {
                console.log('error is: ' + error)
            })
        },
        storeUser ({commit, dispatch}, allData) {
            var authData = allData.authData
            var userData = Object.assign({}, allData.formData)
            delete userData.loading
            userData.userId = authData.localId
            Axios.post('/user.json?auth=' + authData.idToken, userData).then((res) => {
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
                allData.formData.loading = false
            })
        },
        getUser ({commit}, allData) {
            var userData = Object.assign({}, allData.formData)
            delete userData.loading
            userData.userId = allData.authData.localId
            Axios.get('/user.json?auth=' + allData.authData.idToken).then((res) => {
                var data = res.data
                for (let i in data) {
                    if (data[i].userId === allData.authData.localId) {
                        userData = data[i]
                        break
                    }
                }
                commit('authUser', {
                    authData: allData.authData,
                    userData
                })
                // console.log(res)
                router.push({
                    name: 'dashboard'
                })
            }).catch((error) => {
                console.log(error)
            }).then(() => {
                allData.formData.loading = false
            })
        }
    }
})

export default store
