import ApiService from './api.services'

class AuthService extends ApiService {
  constructor() {
    super()
  }
  getGroups() {
    return this.http.get('api/groups/')
  }
}

const instance = new AuthService()

export default instance
