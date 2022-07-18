import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import HailIcon from "@mui/icons-material/Hail";
import SettingsIcon from "@mui/icons-material/Settings";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes["logo-nav-container"]}>
        <div className={classes.logo}>Logo</div>
        <div className={classes.navlinks}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/"
          >
            <DashboardIcon />
            <span> Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/students"
          >
            <PeopleAltIcon />
            <span> Students</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/groups"
          >
            <GroupsIcon />
            <span> Groups</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/teachers"
          >
            <HailIcon />
            <span> Teachers</span>
          </NavLink>
        </div>
      </div>
      <div className={classes["settings-nav"]}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="/settings"
        >
          <SettingsIcon />
          <span> Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
