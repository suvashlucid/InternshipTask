import { Outlet } from "react-router-dom";

import Cbar from "../ui/cbar/Cbar";
import Topnav from "../ui/cbar/Topnav/Topnav";
const Template = () => {
  return (
    <div>
      <Topnav />
      <Cbar />
      <Outlet />
    </div>
  );
};

export default Template;
