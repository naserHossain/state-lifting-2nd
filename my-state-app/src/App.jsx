import React, { useState } from "react";
import ContactForm from "./components/contact-app/ContactForm";
import Table from "./components/contact-app/Table";
const App = () => {
    const [contacts, setContacts] = useState([]);
    const getContact = (contact) => {
        setContacts([].concat(...contacts, contact));
    };
    return (
        <div>
            <h2> Focus App</h2>
            <ContactForm getContact={getContact} />
            <Table contacts={contacts} />
        </div>
    );
};

export default App;
