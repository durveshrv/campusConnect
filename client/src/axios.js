import axios from "axios";
 

const instance = axios.create({
    baseURL:'https://campusconnect-1.onrender.com/',
  });

  export default instance;