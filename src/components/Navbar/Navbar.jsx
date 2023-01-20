import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

let activeStyle = {
  fontWeight: "bolder",
};

let activeClassName = "underline";

const Navbar = function () {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
