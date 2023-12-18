import React, { createContext, useContext, useState, useEffect } from "react";
import Flash from "./Flash";

const FlashContext = createContext();

export const FlashProvider = ({ children }) => {
  const [flash, setFlash] = useState({
    visibility: false,
    message: "",
    type: "",
  });

  //Close after 5s
  useEffect(() => {
    if (flash.visibility) {
      const closeFlash = () => setFlash({ ...flash, visibility: false });
      const timer = setTimeout(closeFlash, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [flash]);

  const showFlash = (message, type) => {
    setFlash({ visibility: true, message, type });
  };

  const closeFlash = () => {
    setFlash({ ...flash, visibility: false });
  };

  return (
    <FlashContext.Provider value={{ showFlash, closeFlash }}>
      {children}
      <Flash {...flash} />
    </FlashContext.Provider>
  );
};

export const useFlash = () => {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error("useFlash must be used within a FlashProvider");
  }
  return context;
};
