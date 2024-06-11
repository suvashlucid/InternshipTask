import { Mail, Phone } from "lucide-react";
import "./Topnav.css";

function Topnav() {
  return (
    <div className="firstdiv sm:text-sx">
      <div className="firstdivv">
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          <Phone style={{ width: "18px", color: "orange" }} /> +9779862417880{" "}
        </h4>
      </div>
      <div className="seconddivv">
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          <Mail
            style={{
              width: "18px",
              color: "orange",
            }}
          />{" "}
          Suvashlucid@gmail.com
        </h4>
      </div>
    </div>
  );
}

export default Topnav;
