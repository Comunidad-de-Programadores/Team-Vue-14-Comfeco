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
  addToEvent(event_id) {
    console.log(event_id)
    return this.http.post('api/events/add-user/', {
      event_id: event_id
    })
  }
  getUserEvents() {
    return this.http.get('api/user/events/')
  }
}

const instance = new CommunityService()

export default instance
