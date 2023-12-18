import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Passport({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${storedToken}`;
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  // Return true if user is logged in, false otherwise
  return isLoggedIn ? children : null;
}
