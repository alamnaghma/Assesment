import axios from "axios";
import {toast} from 'react-toastify';

axios.interceptors.response.use({}, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
    console.log(error)
      toast.error("An unexpected error occured");
    }
    return Promise.reject(error);
  });
  

  export default {
    post : axios.post
  }