import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link
      href="/header"
      style={{
        textDecoration: "none",
        color: "#1d1c1c",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Header" />
      </ListItemButton>
    </Link>

    <Link
      href="/menus"
      style={{
        textDecoration: "none",
        color: "#1d1c1c",
      }}
    >
      <ListItemButton>
        {" "}
        {/* Use component="a" to make it a clickable link */}
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Menus" />
      </ListItemButton>
    </Link>

    <Link
      href="/hero-section"
      style={{
        textDecoration: "none",
        color: "#1d1c1c",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Hero Section" />
      </ListItemButton>
    </Link>



    <Link
      href="/general"
      style={{
        textDecoration: "none",
        color: "#1d1c1c",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </Link>

    

    
  </React.Fragment>
);

export const secondaryListItems = <React.Fragment></React.Fragment>;
