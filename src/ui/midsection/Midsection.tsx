import BrushIcon from "@mui/icons-material/Brush";
import ChaletIcon from "@mui/icons-material/Chalet";
import HomeIcon from "@mui/icons-material/Home";
import "./Midsection.css";

function Midsection() {
  return (
    <div className="midsection">
      <div className="grida grid-item">
        <HomeIcon className="icon" />
        <span>Repair</span>
      </div>
      <div className="gridb grid-item">
        <BrushIcon className="icon" />
        <span>Improve</span>
      </div>
      <div className="gridc grid-item">
        <ChaletIcon className="icon" />
        <span>Maintain</span>
      </div>
    </div>
  );
}

export default Midsection;
