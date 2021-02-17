import axios from 'axios'

class ApiService {
  constructor () {
    const baseUrl = 'http://comfeco.danielhuamani.com/'
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(this.http, 'this')
  }
  init () {
  }
}

export default ApiService