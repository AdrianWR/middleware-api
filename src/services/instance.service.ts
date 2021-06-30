import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import dotenv from "dotenv";

dotenv.config();

const domain: string = process.env.DOMAIN || "https://api.intra.42.fr/"

function accessTokenInterceptor() {
  const interceptor = axios.interceptors.response.use(
    response => response,
    error => {
      if (error.status !== 401) {
        return Promise.reject(error);
      }

      // Try to refresh token
      axios.interceptors.response.eject(interceptor);
      return axios.post(domain, {
        client_id: process.env.CLIENT_UID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "client_credentials"
      }).then(response => {
        //saveToken();
        error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
        return axios(error.response.config);
      }).catch(error => {
        //destroyToken();
        return Promise.reject(error);
      }).finally(accessTokenInterceptor);
    }
  );
}

const intra: AxiosInstance = axios.create({
  baseURL: domain
});

axios.interceptors.response.use(accessTokenInterceptor);

export default intra;