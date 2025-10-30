import axios from "axios";
const axiosinstance = axios.create({
  // for local host url
  // baseURL: "http://localhost:5000/api",
  //for yegara host
  // baseURL: "https://evangadifourmfe.desalegnmengistu.com/api",

   baseURL: "https://evangadi-backend-bg5e.onrender.com/api"


});
export default axiosinstance;

