import ApiService from './api.services'
import CommunityData from '@/data/community'

class CommunityService extends ApiService {
  constructor() {
    super()
  }
  getAll() {
    return new Promise(resolve => {
      return resolve(CommunityData)
    })
  }
  getEvents() {
    return this.http.get('api/events/')
  }
}

const instance = new CommunityService()

export default instance
