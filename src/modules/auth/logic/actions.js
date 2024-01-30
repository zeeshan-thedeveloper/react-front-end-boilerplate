import { UserAPI } from "../../api";
import { toggleLoading } from "./slice"

const loginUser = ({ email, password }) => (dispatch) => {

    dispatch(toggleLoading(true));
    UserAPI.loginUser({ email, password }).then((res) => {
        console.log(res);
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        console.log("login successful")
        dispatch(toggleLoading(false));
    }).catch((err) => {
        console.log(err)
        dispatch(toggleLoading(false));
    })
 
}

export { loginUser }