import apiClient from "@/lib/apiClient";

export function userLogin(payload:{email:string,password:string}){
    return apiClient("/login",{method:"POST",body: payload});
}