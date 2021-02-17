import ApiService from './api.services'

class AuthService extends ApiService{
  constructor () {
    super()
  }
  recoveryPassword ({ email }) {
    console.log(this.http, 'this')
    return this.http.post('api/password_reset/', {
      email: email
    })
  }
  login ({ email, password }) {
    return this.http.post('api/token/', {
      email: email,
      password: password
    })
  }
}

const instance = new AuthService()

export default instance