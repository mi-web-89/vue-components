import httpClient from './httpClient'

// const API_KEY = 'AIzaSyCq3H98sm9ri-geu7o_thRwuOsIc9DSBiQ'
const END_POINT = 'categories.json'

const getAllCategories = () => {
  return httpClient.get(END_POINT)
}

export {
  getAllCategories
}
