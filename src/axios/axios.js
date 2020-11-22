import axios from 'axios'

export default axios.create({
  baseURL: 'https://hockey-8eb04.firebaseio.com'
})