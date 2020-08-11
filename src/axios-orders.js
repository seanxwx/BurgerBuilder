import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://react-my-burger-32eb6.firebaseio.com/'
})

export default instance;