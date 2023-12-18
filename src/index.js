import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/routes";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FlashProvider } from "./components/Flash/FlashContext";
import AuthProvider from "./provider/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <FlashProvider>
        <Routes />
      </FlashProvider>
    </AuthProvider>
  </React.StrictMode>
);
