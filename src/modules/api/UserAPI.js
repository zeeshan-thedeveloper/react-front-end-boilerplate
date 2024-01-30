import { BASE_URL, httpPost } from "../../shared/apis/axiosInstance"

const USERS_BASE_URL = `${BASE_URL}/`

const loginUser = (data) => httpPost(`${USERS_BASE_URL}login`, data);

export {
    loginUser
}