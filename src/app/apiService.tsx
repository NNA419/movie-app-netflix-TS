import axios, {AxiosInstance} from "axios";
import { BASE_URL } from "./config";

const apiService: AxiosInstance = axios.create({
    baseURL : BASE_URL,
})

apiService.interceptors.request.use(
    (request : any) => {
        console.log("Start Request", request);
        return request;
    },
    function (error : any) {
        console.log(" Request Error", error);
    }
);

apiService.interceptors.response.use(
  (response : any) => {
    console.log("Start Response", response);
    return response;
  },
  function (error : any) {
    console.log(" Response Error", error);
  }
);

export default apiService;