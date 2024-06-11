// src/App.tsx
import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Mainpage from "./Main/Mainpage";
import Template from "./templates/Template";
// import Mainpage from "./Main/Mainpage";
// import Admin from "./ui/Adminpanel/Admin";
// import Cbar from "./ui/Cbar/Cbar";
// import Admindashboard from "./ui/adminpanel/Admindashboard";
// import Topnav from "./ui/Cbar/Topnav/Topnav";
import Admincreate from "./ui/adminpanel/Admincreate";

import ProtectedRoute from "./ProtectedRoute";
import { default as Admindashboard } from "./ui/adminpanel/Admindashboard";
import AdminList from "./ui/adminpanel/Adminlist";
import Changepassword from "./ui/adminpanel/Changepassword";
import Login from "./ui/login/Login"; // assuming you have a Login component
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        { index: true, element: <Mainpage /> },
        { path: "/login", element: <Login /> },
      ],
    },
    {
      path: "/adminn",
      element: <ProtectedRoute />,
      children: [
        { index: true, element: <AdminList /> },
        { path: "admin-list", element: <AdminList /> },
        { path: "change-password", element: <Changepassword /> },
        { path: "dashboard", element: <Admindashboard /> },
        { path: "create", element: <Admincreate /> },
      ],
    },
  ]);

  return (
    // <Router>
    //   <div>
    //     <Topnav />
    //     <Cbar />

    //     <Routes>
    //       <Route path="/" element={<Mainpage />} />

    //       <Route path="/login" element={<Login />} />
    //       <Route path="/adminn" element={<Admin />} />
    //     </Routes>
    //   </div>
    // </Router>
    <RouterProvider router={router} />
  );
};

export default App;
