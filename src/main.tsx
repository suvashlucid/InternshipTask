import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="201492766604-fvkshbi7k2ki3bcue9rg5v7j0s70cpla.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
