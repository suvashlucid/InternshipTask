import Button from "@mui/material/Button";
import "./Landingscreen.css";
const url =
  " https://cdn.pixabay.com/photo/2012/04/16/11/39/plumber-35611_640.png";
function Landingscreen() {
  return (
    <div className="n ">
      <div className="landing1">
        <img
          src={url}
          alt="image"
          width={390}
          height={390}
          style={{ float: "right" }}
        ></img>
      </div>
      <div id="landing2">
        <h1>Repair and Maintenance Services</h1>
        <p className="pst " style={{ color: "black", fontSize: "15px" }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum
          consequatur iure laudantium quo necessitatibus non repellat. Optio ea
          sunt, quas, nulla nisi hic error quae ex exercitationem consectetur
          minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          ipsum consequatur iure laudantium quo necessitatibus non repellat.
          Optio ea sunt, quas, nulla nisi hic error quae ex exercitationem
          consectetur minima! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sint, ipsum consequatur iure laudantium quo necessitatibus non
          repellat. Optio ea sunt, quas, nulla nisi hic error quae ex
          exercitationem consectetur minima!
        </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "orange", marginTop: "28px" }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Landingscreen;
