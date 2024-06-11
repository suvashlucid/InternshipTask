import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);

  const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: "0.7rem auto",
      padding: "0rem",
      width: theme.spacing(2),
      height: theme.spacing(3),
    },
  }));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const classes = useStyles();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    // handle menu actions here
  };
  const Logout = () => {
    localStorage.removeItem("tokenstorage");
    navigate("/login");
  };

  return (
    <div style={{ marginLeft: "100px", position: "fixed" }}>
      <AppBar sx={{ width: "100%", backgroundColor: "black" }}>
        <Toolbar>
          <Avatar
            className={classes.avatar}
            src="https://i.ibb.co/rx5DFbs/avatar.png"
            alt="Juaneme8"
          />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "white", marginLeft: "20px" }}
          >
            Welcome User
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? "Logout" : "Login"}
              onClick={auth ? Logout : undefined}
            />
          </FormGroup>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminHeader;
