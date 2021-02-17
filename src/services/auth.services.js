import ApiService from './api.services'

class AuthService extends ApiService{
  constructor () {
    super()
  }
  recoveryPassword ({ email }) {
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
  validateTokenForPassword (token) {
    return this.http.post('api/password_reset/validate_token/', {
      token: token
    })
  }
  changePassword ({password, token}) {
    return this.http.post('api/password_reset/confirm/', {
      token: token,
      password: password
    })
  }
}

const instance = new AuthService()

export default instance