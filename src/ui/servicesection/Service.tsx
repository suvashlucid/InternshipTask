import { makeStyles } from "@material-ui/core/styles";
import { Build, ColorLens, ThumbUp } from "@material-ui/icons";
import "./Service.css";

const useStyles = makeStyles({
  gridItem: {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",

    backgroundColor: "#8ab9f1",
  },
});

function Service() {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: "38" }}>
      <div className="service1">
        <h2>OUR SERVICES</h2>
        <hr />
      </div>
      <div className="gridsbox">
        <div className={classes.gridItem}>
          <ColorLens fontSize="large" style={{ color: "red" }} />
          <h2>Color</h2>
        </div>
        <div className={classes.gridItem}>
          <ThumbUp fontSize="large" style={{ color: "orange" }} />
          <h2>Improve</h2>
        </div>
        <div className={classes.gridItem}>
          <Build fontSize="large" style={{ color: "blue" }} />
          <h2>Maintain</h2>
        </div>
      </div>
    </div>
  );
}

export default Service;
