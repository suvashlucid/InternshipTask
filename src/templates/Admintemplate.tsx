import { Outlet } from "react-router-dom";
import AdminHeader from "../ui/adminpanel/Adminheader";
import Adminsidebar from "../ui/adminpanel/Adminsidebar";
function Admintemplate() {
  return (
    <div>
      <AdminHeader />
      <Adminsidebar />
      <div
        style={{
          marginLeft: "240px",
          position: "absolute",
          marginTop: "0px",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
      x
    </div>
  );
}

export default Admintemplate;
