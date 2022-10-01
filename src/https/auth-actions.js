import axios from "./axios"

export const loadProfile = async (dispatch) => {
    try {
        dispatch({ type: "USER_LOAD_REQUEST" });
        const { data } = await axios.get("/me");
        console.log(data);
        dispatch({
            type: "USER_LOAD_SUCCESS",
            payload: data,
        });
    } catch (error) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        dispatch({ type: "USER_LOAD_FAILURE" });
    }
}