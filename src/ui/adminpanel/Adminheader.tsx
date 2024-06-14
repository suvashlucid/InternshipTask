import { makeStyles } from "@material-ui/core/styles";
import { ExitToApp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const AdminHeader: React.FC<Props> = ({ onClick }) => {
  const [auth] = React.useState(true);
  const [showdialogue, setshowdialogue] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: "0.7rem auto",
      padding: "0rem",
      width: theme.spacing(2),
      height: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  const user = localStorage.getItem("em") as string;
  const handleMenu = () => {};

  const Logout = () => {
    setshowdialogue((prevshowdialogue) => !prevshowdialogue);
    console.log("opened");
    console.log(showdialogue);
  };

  return (
    <div style={{ marginLeft: "100px", position: "fixed", zIndex: "1" }}>
      <AppBar sx={{ width: "100%", backgroundColor: "black" }}>
        <Toolbar>
          <Avatar
            className={classes.avatar}
            src="https://i.ibb.co/rx5DFbs/avatar.png"
            alt="Juaneme8"
            style={{ marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "white", marginLeft: "20px" }}
          >
            Welcome {`${user}`}
          </Typography>

          <div>
            <button onClick={auth ? Logout : onClick}>
              {auth ? "Logout" : "Login"}
            </button>
          </div>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              style={{ marginLeft: "20px" }}
            >
              <ExitToApp />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminHeader;
