import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../service/Instance";
const eye = <FontAwesomeIcon icon={faEye} />;

interface FormInputs {
  oldPassword: string;
  newPassword: string;
}

const Changepassword: React.FC = () => {
  const [passwordshown, setpasswordshown] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const togglepasswordvisibility = () => {
    setpasswordshown(passwordshown ? false : true);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await axiosInstance.patch("/auth/update-password", data);
      toast.success("Successfully changed");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.warning("Error changing password");
    }
  };

  return (
    <Container sx={{ marginTop: "160px", width: "550px", boxShadow: "24px" }}>
      <form
        className="bg-white shadow-xl mt-50   rounded px-8 pt-6 pb-8 mb-4 sm:mb-22"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Change Password
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Current Password"
            type={passwordshown ? "text" : "password"}
            {...register("oldPassword", {
              required: "Current Password is required",
            })}
            error={!!errors.oldPassword}
            helperText={errors.oldPassword ? errors.oldPassword.message : ""}
            fullWidth
            margin="normal"
          />
          <div style={{ marginLeft: "20px" }}>
            <i onClick={togglepasswordvisibility}>{eye}</i>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="New Password"
            type={passwordshown ? "text" : "password"}
            {...register("newPassword", {
              required: "New Password is required",
            })}
            error={!!errors.newPassword}
            helperText={errors.newPassword ? errors.newPassword.message : ""}
            fullWidth
            margin="normal"
          />
          <div style={{ marginLeft: "20px" }}>
            <i onClick={togglepasswordvisibility}>{eye}</i>
          </div>
        </div>

        <Button type="submit" variant="contained" color="primary">
          Change Password
        </Button>
      </form>
    </Container>
  );
};

export default Changepassword;
