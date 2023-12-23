import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useFlash } from "../provider/FlashProvider";
import { useEffect } from "react";

export const ProtectedRoutes = () => {
  const { token } = useAuth();
  const { showFlash } = useFlash();

  useEffect(() => {
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, show flash message and redirect to the login page
      showFlash("Harap login terlebih dahulu", "warning");
    }
  }, [token, showFlash]);

  // If authenticated, render the child routes
  return token ? <Outlet /> : <Navigate to="/login" />;
};
