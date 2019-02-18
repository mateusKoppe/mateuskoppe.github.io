import Vue from 'vue'
import axios from 'axios'

const conn = axios.create({
  baseURL: 'http://localhost:3000/data'
})

export default ({ app }, inject) => {
  inject('api', conn)
}
