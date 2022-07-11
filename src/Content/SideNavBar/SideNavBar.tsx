import * as React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

const SideNavBar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const ctxGlobal = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    ctxGlobal.dispatch({
      type: "SET_GLOBAL",
      payload: event.target.checked,
    });
  };
  return (
    <List>
      <ListItemIcon>
        <Switch onChange={handleChange} />
        {/* {ctxGlobal.state.darkMode}
        {ctxGlobal.state.asset} */}
      </ListItemIcon>
    </List>
  );
};

export default SideNavBar;
