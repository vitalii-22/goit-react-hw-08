import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const nameFilter = useSelector(selectNameFilter);

  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        name="name"
        value={nameFilter}
        onChange={(evt) =>
          dispatch(changeFilter(evt.target.value.toLowerCase()))
        }
      />
    </label>
  );
};

export default SearchBox;
