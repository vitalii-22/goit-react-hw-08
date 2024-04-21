import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user}</p>
      <NavLink className={getNavLinkClassNames} to="/contacts">
        Contacts
      </NavLink>
      <button
        className={css.dtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
