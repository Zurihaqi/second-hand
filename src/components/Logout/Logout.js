import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { useFlash } from "../Flash/FlashContext";

const Logout = () => {
  const { setToken } = useAuth();
  const { showFlash } = useFlash();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    showFlash("Berhasil Log Out", "success");
    navigate("/login", { replace: true });
  };

  handleLogout();

  return null;
};

export default Logout;
