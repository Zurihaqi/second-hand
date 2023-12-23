import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp * 1000;

      // If token is expired, remove token
      if (expirationTime < Date.now()) {
        localStorage.removeItem("token");
        setToken(null);
        return;
      }

      const fetchUserData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/api/profile");
          setUser(response.data.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      localStorage.setItem("token", token);
      fetchUserData();
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memo-ized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
