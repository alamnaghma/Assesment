import http from "./httpServices";

const apiEndpoint = "http://31.220.82.50:202/api/Auth/Authentication";

export function login(email, password){
    return  http.post(apiEndpoint, {email, password})
  }