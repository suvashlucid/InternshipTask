import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Apps,
  AssignmentInd,
  ContactMail,
  ExitToApp,
  Home,
} from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

const useStyles = makeStyles(() => ({
  menuSliderContainer: {
    width: drawerWidth,
    background: "#000000",
    height: "100%",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    marginBottom: "20px",
    textUnderlineOffset: "9px",
  },

  logoText: {
    color: "white",
    fontWeight: "bold",
    marginTop: "80px",
    fontSize: "1.5rem",
    textDecoration: "underline",
  },
  listItem: {
    color: "white",
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    onClick: "/adminn/dashboard",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Admin List",
    onClick: "/adminn/admin-list",
  },
  {
    listIcon: <Apps />,
    listText: "ChangePassword",
    onClick: "/adminn/change-password",
  },
  {
    listIcon: <ContactMail />,
    listText: "Create Admin",
    onClick: "/adminn/create",
  },
  {
    listIcon: <ExitToApp />,
    listText: "Logout",
    onClick: "logout",
  },
];

function Adminsidebar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleListItemClick = (path: any) => {
    if (path === "logout") {
      setOpen(true);
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("tokenstorage");
  };

  const sideList = () => (
    <div
      style={{
        height: "100vh",
        marginTop: "53px",
        top: "0",
        position: "fixed",
      }}
    >
      <Box className={classes.menuSliderContainer} component="div">
        <div className={classes.logoContainer}>
          <Typography className={classes.logoText}>Options </Typography>
        </div>
        <Divider />
        <List style={{ marginTop: "20px" }}>
          {listItems.map((listItem, index) => (
            <ListItem
              style={{ marginTop: "5px" }}
              className={classes.listItem}
              button
              key={index}
              onClick={() => handleListItemClick(listItem.onClick)}
            >
              <ListItemIcon className={classes.listItem}>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      {sideList()}
      <Dialog
        style={{ width: "100vw", height: "100vh" }}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ marginBottom: "20px" }} id="alert-dialog-title">
          {"You are about to Logout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to logout?
          </DialogContentText>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <ExitToApp style={{ width: "30px", height: "60px" }} />
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "space-between", padding: "10px 20px" }}
        >
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 15px",
            }}
            onClick={handleLogout}
            autoFocus
          >
            Yes
          </Button>
          <Button
            style={{
              backgroundColor: "slategray",
              color: "white",
              padding: "5px 15px",
            }}
            onClick={() => setOpen(false)}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Adminsidebar;
