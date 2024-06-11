import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Apps, AssignmentInd, ContactMail, Home } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#000000",
    height: "100%",
  },

  listItem: {
    color: "white",
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    onClick: "/adminn/create",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Admin List",
    onClick: "/adminn/admin-list",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    onClick: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    onClick: "/contacts",
  },
];

function Adminsidebar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleListItemClick = (path: any) => {
    navigate(path);
  };

  const sideList = () => (
    <div
      style={{
        height: "100vh",
        marginTop: "53px",
        position: "fixed",
      }}
    >
      <Box className={classes.menuSliderContainer} component="div">
        <Divider />
        <List style={{ marginTop: "40px" }}>
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

  return <div>{sideList()}</div>;
}

export default Adminsidebar;
