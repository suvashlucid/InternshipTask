import "./Aboutus.css";

const url =
  " https://cdn.pixabay.com/photo/2012/04/16/11/39/plumber-35611_640.png";

function Aboutus() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle" style={{ color: "blue" }}>
        ABOUT US
      </h1>

      <h1 className="aboutText">
        "We provide the best services in the town. Probably one of the best in
        country". Our team is dedicated to providing high-quality services!.
      </h1>
      <img src={url} alt="img" className="img" />
    </div>
  );
}

export default Aboutus;
