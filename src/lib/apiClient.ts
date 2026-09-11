import { ofetch } from "ofetch";

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiClient = ofetch.create({
    baseURL: BaseUrl,
});
export default apiClient;