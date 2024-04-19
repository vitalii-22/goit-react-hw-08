import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { IoPersonAddSharp } from "react-icons/io5";

import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const UserRegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    console.log("data: ", data);

    dispatch(register(data));
    formActions.resetForm();
  };

  //   const handleSubmit = (data, formActions) => {
  //     onRegister(data);
  //     formActions.resetForm();
  //   };

  return (
    <Formik
      validationSchema={UserRegistrationSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Register</h2>

        <label className={css.label}>
          <span className={css.labelText}>User name:</span>
          <Field
            className={css.formInput}
            placeholder="name"
            type="text"
            name="name"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Email:</span>
          <Field
            className={css.formInput}
            placeholder="email"
            type="text"
            name="email"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Password:</span>
          <Field
            className={css.formInput}
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </label>

        <button
          className={css.submitBtn}
          type="submit"
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          Sign Up <IoPersonAddSharp />
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
