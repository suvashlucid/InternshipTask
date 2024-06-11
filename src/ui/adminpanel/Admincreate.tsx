import { yupResolver } from "@hookform/resolvers/yup";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material"; // Import icons from MUI
import { Container } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import axiosInstance from "../../service/Instance";
import Visibility from "../login/Visibility"; // Import the Visibility component correctly

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email typed")
    .required("You need to fill email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is required"),
  firstName: yup.object().shape({
    en: yup.string().required("input first name"),
  }),
  lastName: yup.object().shape({
    en: yup.string().required("input the last name"),
  }),
  role: yup.string().required("Role is needed"),
  phoneNumber: yup.string().required("Phone number is needed"),
});

interface Formdata {
  email: string;
  password: string;
  role: string;
  firstName: {
    en: string;
    ne: string;
  };
  lastName: {
    en: string;
    ne: string;
  };
  phoneNumber: string;
}

const Admincreate: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Formdata>({
    resolver: yupResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmitHandler = async (data: Formdata) => {
    try {
      console.log("Submitting data:", JSON.stringify(data, null, 2));

      const requestData = {
        email: data.email,
        password: data.password,
        role: data.role,
        details: {
          firstName: {
            en: data.firstName.en,
            ne: data.firstName.ne,
          },
          lastName: {
            en: data.firstName.en,
            ne: data.firstName.ne,
          },
          phoneNumber: data.phoneNumber,
        },
      };
      const response = await axiosInstance.post("/admin", requestData);
      toast.success("Successfully created new account");

      console.log("Server response:", response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error");
    }
  };

  return (
    <Container
      sx={{ marginTop: "90px", overflowX: "auto ", overflowY: "auto" }}
    >
      <div>
        <ToastContainer />

        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="w-96 mx-auto p-8 rounded-lg shadow-md"
          noValidate
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
            Welcome
          </span>

          <div className="relative mt-4">
            <EmailIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={`w-full border p-2 pl-10 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative mt-4">
            <LockIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("password")}
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className={`w-full border p-2 pl-10 rounded ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <Visibility
              isVisible={isPasswordVisible}
              toggleVisibility={togglePasswordVisibility}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="relative mt-4">
            <PersonIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("firstName.en")}
              type="text"
              placeholder="First Name"
              className={`w-full border p-2 pl-10 rounded ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="relative mt-4">
            <PersonIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("lastName.en")}
              type="text"
              placeholder="Last Name"
              className={`w-full border p-2 pl-10 rounded ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="relative mt-4">
            <PersonIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("firstName.ne")}
              type="text"
              placeholder="पहिलो नाम लेख्नुहोस्"
              className={`w-full border p-2 pl-10 rounded ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="relative mt-4">
            <PersonIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("lastName.ne")}
              type="text"
              placeholder="पछिलो नाम लेख्नुहोस्"
              className={`w-full border p-2 pl-10 rounded ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="relative mt-4">
            <PhoneIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              {...register("phoneNumber")}
              type="text"
              placeholder="Phone Number"
              className={`w-full border p-2 pl-10 rounded ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <div className="mt-4">
                <label htmlFor="role" className="block">
                  Role
                </label>
                <select
                  id="role"
                  {...field}
                  className={`w-full border p-2 rounded ${
                    errors.role ? "border-red-500" : ""
                  }`}
                >
                  <option value="">None</option>
                  <option value="SUDO_ADMIN">SUDO_ADMIN</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="USER">USER</option>
                </select>
                {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
              </div>
            )}
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Admincreate;
