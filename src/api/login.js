import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/login',
    method: 'get',
    params: { username: username, password: password }
    // data: {
    //   username,
    //   password
    // }
  })
}

export function getProfile(token) {
  return request({
    url: '/user/profile',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
