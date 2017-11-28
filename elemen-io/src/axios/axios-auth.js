import axios from 'axios'

var auth = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})
export default auth
