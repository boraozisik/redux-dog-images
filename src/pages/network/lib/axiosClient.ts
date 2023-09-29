import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dog.ceo/api",
});

export default axiosClient;
