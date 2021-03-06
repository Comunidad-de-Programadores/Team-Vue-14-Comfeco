import axios from 'axios'
import local from '../utils/localStorage'

class ApiService {
  constructor() {
    const baseUrl = 'http://comfeco.danielhuamani.com/'
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${local.get('token')}`
      }
    })
  }
  init() {}
}

export default ApiService
