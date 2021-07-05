import axios, { AxiosInstance } from "axios";
import config from "../config"

const intra: AxiosInstance = axios.create({
  baseURL: config.intra.domain
});

const _refreshAccessToken = async (): Promise<string> => {
  const response = await intra.post("/oauth/token", {
    client_id: config.intra.client_id,
    client_secret: config.intra.client_secret,
    grant_type: "client_credentials"
  });
  return response.data.access_token;
};

// Response interceptor for API calls
intra.interceptors.response.use((response) => {
  return response
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await _refreshAccessToken();            
    intra.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    return intra(originalRequest);
  }
  return Promise.reject(error);
});

export default intra;