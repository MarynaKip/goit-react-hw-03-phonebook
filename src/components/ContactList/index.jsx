import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,
  },
});

const ContactList = ({ contacts, onClick }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {contacts.map((contact) => (
        <ContactItem contact={contact} onClick={onClick} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
