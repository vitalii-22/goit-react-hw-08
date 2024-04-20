import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClassNames} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
