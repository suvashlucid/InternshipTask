import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import encryptDecrypt from "../../functions/encryptDecrypt";
import axiosInstance from "../../service/Instance";

function GoogleLoginComponent() {
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      const response: any = await axiosInstance.post("/auth/google", {
        googleId: credentialResponse?.credential,
      });

      if (response?.data?.data?.tokens?.accessToken) {
        const enc = encryptDecrypt.encrypt(
          response.data.data.tokens.accessToken
        );
        localStorage.setItem("tokenstorage", enc as string);

        navigate("/adminn");
        console.log("dsfhsdfsjhdgf");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleGoogleLogin(credentialResponse);
        }}
        onError={() => {
          console.error("Login Failed");
        }}
      />
    </div>
  );
}

export default GoogleLoginComponent;
