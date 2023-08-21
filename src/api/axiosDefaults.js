import axios from "axios";

axios.defaults.baseURL = 'https://moments-pj-520cef3ec6cb.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true