import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    display: "flex",
    marginBottom: 10,
    alignItems: "flex-start",
  },
});

const ContactItem = ({ contact, onClick }) => {
  const classes = useStyles();

  return (
    <li key={contact.id} className={classes.item}>
      {contact.name}
      {contact.number}
      <button id={contact.id} type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
