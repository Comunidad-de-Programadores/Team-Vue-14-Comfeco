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
}

const instance = new CommunityService()

export default instance
