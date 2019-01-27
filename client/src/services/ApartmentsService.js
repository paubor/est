import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('apartments', {
      params: {
        search
      }
    })
  }
}
