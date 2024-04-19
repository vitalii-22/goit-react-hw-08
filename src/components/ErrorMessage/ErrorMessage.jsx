import { useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/selectors";

const ErrorMessage = () => {
  const errorMessage = useSelector(selectError);

  return <p>{errorMessage}</p>;
};

export default ErrorMessage;
