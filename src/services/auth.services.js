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
}

const instance = new AuthService()

export default instance