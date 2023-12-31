import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? '' : 'http://13.124.204.159:8080',
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.data === 'jwt expired') {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
//배포가 되었다면 앞의 주소로 axios요청을 보낸다.
