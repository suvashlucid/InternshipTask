import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import encryptDecrypt from "../../functions/encryptDecrypt";
import axios from "../../service/Instance";
import Label from "../../utils/themes/components/Label";
import Googlelogin from "../adminpanel/Googlelogin";
const eye = <FontAwesomeIcon icon={faEye} />;

interface logintype {
  email: string | null;
  password: string | null;
  rememberme: boolean;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<logintype>();
  const { encrypt } = encryptDecrypt;
  const [passwordshown, setpasswordshown] = useState<boolean>(false);

  const togglepasswordvisibility = () => {
    setpasswordshown(passwordshown ? false : true);
  };

  const onSubmit: SubmitHandler<logintype> = async (data) => {
    try {
      const response = await axios.post("/auth", {
        username: data.email,
        password: data.password,
      });
      console.log(response);
      console.log(data);
      localStorage.setItem("em", data.email as string);

      if (data.rememberme) {
        localStorage.setItem("email", data.email as string);
        localStorage.setItem("password", data.password as string);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      const encrypted = encrypt(response.data.data.tokens.accessToken);
      localStorage.setItem("tokenstorage", encrypted as string);
      navigate("/adminn");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 float-top">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:mb-22"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <Label value="Email" />
          <input
            type="email"
            id="email"
            {...register("email")}
            defaultValue={localStorage.getItem("email") as string}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <Label value="Password" />
        <div
          className="mb-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type={passwordshown ? "text" : "password"}
            id="password"
            {...register("password")}
            defaultValue={localStorage.getItem("password") as string}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div style={{ marginLeft: "9px" }}>
            <i onClick={togglepasswordvisibility}>{eye}</i>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Label value="Remember me" />
          <input
            type="checkbox"
            id="rememberme"
            {...register("rememberme")}
            style={{ marginLeft: "10px", width: "30px" }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            style={{ marginTop: "20px" }}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
        <div>
          <Googlelogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
