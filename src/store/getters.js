const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  realname: state => state.user.realname,
  role: state => state.user.role,
  permissions: state => state.user.permissions
}
export default getters
