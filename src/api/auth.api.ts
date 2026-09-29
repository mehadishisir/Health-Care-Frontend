import apiClient from "@/lib/apiClient";

export function userLogin(payload:{email:string,password:string}){
    return apiClient("/auth/login",{method:"POST",body: payload});
}
export function userLogOut(){
    return apiClient("/auth/logout",{method:"POST"});
}
export function userGetMe() {
  console.log("userGetMe CALLED");

  return apiClient("/auth/me")
    .then((res) => {
      console.log("OFETCH RESPONSE:", res);
      return res;
    })
    .catch((error) => {
      console.error("OFETCH ERROR:", error);
      throw error;
    });
}