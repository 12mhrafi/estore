import axios from 'axios';

const axiosSecure = axios.create({
  baseURL:"https://dummyjson.com/"
})
const useAxiosSecure = () => {
  return axiosSecure;
}

export default useAxiosSecure;