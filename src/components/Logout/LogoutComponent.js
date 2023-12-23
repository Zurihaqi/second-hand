import { useEffect } from "react";
import { useAuth } from "../../provider/AuthProvider";
import { useFlash } from "../../provider/FlashProvider";
import { Navigate } from "react-router-dom";

const LogoutComponent = () => {
  const { setToken } = useAuth();
  const { showFlash } = useFlash();

  useEffect(() => {
    const handleLogout = async () => {
      setToken();
      showFlash("Berhasil Log Out", "success");
    };

    handleLogout();
  }, [setToken, showFlash]);

  return <Navigate to="/login" />;
};

export default LogoutComponent;
