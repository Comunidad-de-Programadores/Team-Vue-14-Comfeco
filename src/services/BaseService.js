import axios from 'axios'

class BaseService {
  constructor () {
    this.http = this.init()
  }
  init () {
    const baseUrl = 'http://comfeco.danielhuamani.com'
    axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export default BaseService