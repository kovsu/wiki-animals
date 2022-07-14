import axios, { AxiosRequestConfig } from "axios";

// create 相当于浅复制了一个axios
const request = axios.create({
  baseURL: "https://zoo-animal-api.herokuapp.com",
});

export default <T>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return res.data as T;
  });
};
