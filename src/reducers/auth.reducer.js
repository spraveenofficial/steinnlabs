export const authReducer = (state, action) => {
    switch (action.type) {
        case "USER_LOAD_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "USER_LOAD_SUCCESS":
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userInfo: action.payload,
            };
        case "USER_LOAD_FAILURE":
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userInfo: null,
            };
        case "USER_LOGOUT":
            localStorage.clear();
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userInfo: null,
            };
        default:
            return state;
    }
};