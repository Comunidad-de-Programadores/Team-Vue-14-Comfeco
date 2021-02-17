import axios from 'axios'


export default function execute() {
  axios.interceptors.request.use((config) => {
      
      return config;
  }, function(err) {
      return Promise.reject(err);
  });
}