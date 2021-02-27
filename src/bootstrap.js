import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.baseURL = 'http://localhost:6060/api'
// axios.defaults.baseURL = 'https://nagytamas93.hu/api/'

axios.defaults.withCredentials = true;