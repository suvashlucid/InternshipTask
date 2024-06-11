import { Navigate } from "react-router-dom";
import encryptDecrypt from "./functions/encryptDecrypt";
import Admintemplate from "./templates/Admintemplate";

const ProtectedRoute = () => {
  if (encryptDecrypt.decrypt(localStorage.getItem("tokenstorage") as string)) {
    return <Admintemplate />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
