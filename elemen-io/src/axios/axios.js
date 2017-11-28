import axios from 'axios'

var Axios = axios.create({
    baseURL: 'https://manager-base.firebaseio.com'
})
export default Axios
