import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  if (!filteredContacts.length) {
    return <p className={css.message}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
