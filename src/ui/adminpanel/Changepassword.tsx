import { faEye, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../service/Instance";

const eye = <FontAwesomeIcon icon={faEye} />;
const keyIcon = <FontAwesomeIcon icon={faKey} />;

interface FormInputs {
  oldPassword: string;
  newPassword: string;
}

const Changepassword: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await axiosInstance.patch("/auth/update-password", data);
      toast.success("Successfully changed");
    } catch (error: any) {
      if (error instanceof Error) {
        console.log("Instance Error");
      } else {
        console.error("Error changing password:", error);
        toast.error(error?.response.data.message);
      }
    }
  };

  return (
    <form
      className=" h-screen w-full bg-white  mt-64 ml-72 h-12px px-8 pb-8 mb-4     "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center font-bold text-slate-600  underline decoration-2 decoration-black underline-offset-8 text-xl mb-6">
        Change Password
      </h1>
      <ToastContainer />
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {keyIcon}
        </div>
        <TextField
          label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Password"
          type={passwordShown ? "text" : "password"}
          placeholder={"Current Password"}
          {...register("oldPassword", {
            required: "Current Password is required",
          })}
          error={!!errors.oldPassword}
          helperText={errors.oldPassword ? errors.oldPassword.message : ""}
          fullWidth
          margin="normal"
          InputProps={{
            style: { paddingLeft: "2.5rem" }, // Adjust padding to accommodate icon
          }}
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {eye}
        </div>
      </div>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {keyIcon}
        </div>
        <TextField
          label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Password"
          type={passwordShown ? "text" : "password"}
          placeholder="New Password"
          {...register("newPassword", {
            required: "New Password is required",
          })}
          error={!!errors.newPassword}
          helperText={errors.newPassword ? errors.newPassword.message : ""}
          fullWidth
          margin="normal"
          InputProps={{
            style: { paddingLeft: "2.5rem" }, // Adjust padding to accommodate icon
          }}
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {eye}
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        style={{ color: "white", backgroundColor: "slategray" }}
        className="w-1/4 h-8 mx-auto block"
      >
        Change
      </Button>
    </form>
  );
};

export default Changepassword;
