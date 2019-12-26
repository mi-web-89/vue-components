import axios from 'axios'

const httpClient = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'https://tree-3125d.firebaseio.com/',
  headers: {
    'Content-Type': 'application/json'
    // anything you want to add to the headers
  }
})

// inject auth header
export default httpClient
