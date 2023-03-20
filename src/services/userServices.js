import http from "./httpServices";

const apiEndpoint = "http://31.220.82.50:202/api/Auth/Register";

export function register(user){
   return http.post(apiEndpoint, {
        name : user.name,
        email:user.email,
        password: user.password,
        role: user.role,
        mobile: user.mobile,
        dob: user.dob,
        sportID: user.sportID,
        machineID: user.machineID,
        yearsOfExperience: user.yearsOfExperience,
    })
}