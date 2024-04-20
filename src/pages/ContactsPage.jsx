// const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1 className="title">Phonebook</h1>

//       <ContactForm />
//       <SearchBox />
//       {loading && <Loader />}
//       {error !== null && <ErrorMessage />}
//       <ContactList />
//     </div>
//   );

import { Helmet } from "react-helmet-async";

const ContactsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h>ContactsPage</h>
    </div>
  );
};

export default ContactsPage;
