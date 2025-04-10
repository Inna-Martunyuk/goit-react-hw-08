import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    try {
      dispatch(deleteContact(contact.id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className={css.contactDiv}>
      <div className={css.container}>
        <div className={css.containerName}>
          <IoPerson />
          <p className={css.name}>{contact.name}</p>
        </div>
        <div className={css.containerNumber}>
          <IoCallSharp />
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>
      <button
        className={`${css.btn} ${css.deleteBtn}`}
        type="button"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
