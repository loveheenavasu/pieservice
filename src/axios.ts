import axios from "axios";

const AXIOS = axios.create({
  baseURL:
    "http://localhost:8000" || "https://piemultilingualbackend.onrender.com",
});

export default AXIOS;
