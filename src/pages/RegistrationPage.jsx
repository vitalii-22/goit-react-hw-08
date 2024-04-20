import { Helmet } from "react-helmet-async";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
