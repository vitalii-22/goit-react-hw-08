import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const AuthNav = () => {
  return (
    <div className={css.navLinkWrapper}>
      <NavLink className={getNavLinkClassNames} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
