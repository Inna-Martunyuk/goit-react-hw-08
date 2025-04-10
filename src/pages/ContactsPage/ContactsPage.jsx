import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectContacts } from "../../redux/contacts/selectors"; 
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your tasks</title>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      {!isLoading && contacts.length > 0 && <ContactList />}
      {!isLoading && contacts.length === 0 && <div>No contacts available</div>}
    </>
  );
}
