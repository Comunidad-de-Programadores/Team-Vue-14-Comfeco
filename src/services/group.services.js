import ApiService from './api.services'

class AuthService extends ApiService {
  constructor() {
    super()
  }
  getGroups() {
    return this.http.get('api/groups/')
  }
  postGroup(id) {
    return this.http.post('api/groups/add-user/', {
      group_id: id
    })
  }
  getUserGroups() {
    return this.http.get('api/user/groups/', {
      group_id: 0
    })
  }
}

const instance = new AuthService()

export default instance
