import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/auth.reducer";
import { loadProfile } from "../https/auth-actions";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  var token = localStorage.getItem("access_token");
  const initialState = {
    loading: token ? true : false,
    userInfo: null,
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (token && !state.isAuthenticated) {
      loadProfile(dispatch);
    }
  }, [token, dispatch]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        userInfo: state.userInfo,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
