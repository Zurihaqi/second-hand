import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/routes";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FlashProvider } from "./provider/FlashProvider";
import AuthProvider from "./provider/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <FlashProvider>
      <Routes />
    </FlashProvider>
  </AuthProvider>
);
