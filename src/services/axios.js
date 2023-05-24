import axios from "axios";

// instance used allover the site as baseUrl 
const instance = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});


export default instance;