import { Context } from "@nuxt/types";
import store from "~/_store/store";

export default function ({ $axios, $config }: Context) {
  $axios.interceptors.request.use((config) => {
    store.loader = 'loader'

    // config.baseURL = `${$config.BACKEND_URL}/api`
  
    return config;
  });
  
  $axios.interceptors.response.use(
    response => {
      store.loader = null
      return response
    },
    error => {
      store.loader = null
      return Promise.reject(error);
    }
  )
}