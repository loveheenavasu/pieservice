import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'https://piemultilingualbackend.onrender.com',
})

export default AXIOS