import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:7000'})

export function fetchResults() {
  return api.get('/records')
    .then((res) => res.data)
}

export function fetchCityData() {
  return api.get(`/records/melbourne`)
    .then((res) => res.data)
}