import * as React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const SideNavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <List>
      <ListItemIcon>
        <Switch onChange={handleChange} />
      </ListItemIcon>
    </List>
  );
};

export default SideNavBar;
