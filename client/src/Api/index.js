import axios from 'axios'

const API = axios.create({ baseURL: 'https://api.spotify.com' })

API.interceptors.request.use(req => {
    if(localStorage.getItem('access_token')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('access_token'))}`
    }
})

export const searchQuery = (searchItem) => API.get(`/v1/search?q=${searchItem}&type=tracks`)