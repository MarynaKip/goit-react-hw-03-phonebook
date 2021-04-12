import "./App.css";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";

const App = () => {
  const alert = useAlert();
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storageContacts = localStorage.getItem("contacts");
    setContacts(JSON.parse(storageContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const handleFilter = ({ target }) => setFilter(target.value);

  const contactsArr = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert.show(`Contact is already in contscts.`);
      return;
    }
    setContacts((prevState) => [...prevState, newContact]);
  };

  const handleDeleteItem = ({ target }) => {
    const newContactList = contacts.filter(
      (contact) => target.id !== contact.id
    );
    setContacts([...newContactList]);
  };

  return (
    <>
      <span>Find:</span>
      <input type="text" value={filter} name="filter" onChange={handleFilter} />

      <Contacts onSubmit={handleAddContact} />

      <ContactList contacts={contactsArr} onClick={handleDeleteItem} />
    </>
  );
};

export default App;
