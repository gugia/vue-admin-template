import { getProfile, login, logout } from '@/api/login'
import { getToken, removeToken, setToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    username: '',
    realname: '',
    avatar: '',
    isManager: false,
    role: {},
    permissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_REALNAME: (state, realname) => {
      state.realname = realname
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ISMANAGER: (state, isManager) => {
      state.isManager = isManager
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          /* 用户资料 */
          if (data.permissions && data.permissions.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_PERMISSIONS', data.permissions)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_USERNAME', data.user.username)
          commit('SET_REALNAME', data.user.realname)
          commit('SET_AVATAR', data.user.avatar)
          commit('SET_ISMANAGER', data.user.isManager)
          commit('SET_ROLE', data.user.role)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetProfile({ commit, state }) {
      return new Promise((resolve, reject) => {
        getProfile(state.token).then(response => {
          const data = response.data
          commit('SET_USERNAME', data.username)
          commit('SET_REALNAME', data.realname)
          commit('SET_AVATAR', data.avatar)
          commit('SET_ISMANAGER', data.isManager)
          commit('SET_ROLE', data.role)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_PERMISSIONS', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
