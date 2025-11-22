import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change to your Render URL after deployment
});

export default API;
