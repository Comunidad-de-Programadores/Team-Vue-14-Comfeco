import ApiService from './api.services'

class AuthService extends ApiService {
  constructor() {
    super()
  }
  recoveryPassword({ email }) {
    return this.http.post('api/password_reset/', {
      email: email
    })
  }
  login({ email, password }) {
    return this.http.post('api/token/', {
      email: email,
      password: password
    })
  }
  register({ username, email, password, confirm_password }) {
    return this.http.post('api/user/register', {
      username: username,
      email: email,
      password: password,
      confirm_password: confirm_password
    })
  }
  validateTokenForPassword(token) {
    return this.http.post('api/password_reset/validate_token/', {
      token: token
    })
  }
  changePassword({ password, token }) {
    return this.http.post('api/password_reset/confirm/', {
      token: token,
      password: password
    })
  }
  getProfile() {
    return this.http.get('api/user/me/')
  }
  updateProfile(data) {
    return this.http.put('api/user/me/', data)
  }
}

const instance = new AuthService()

export default instance
