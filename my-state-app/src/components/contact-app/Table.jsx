import { useState } from "react";

const Table = ({ contacts }) => {
    const [filter, setFilter] = useState("All");
    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    let filteredContacts = [];
    if (filter === "All") {
        filteredContacts = contacts;
    } else {
        filteredContacts = contacts.filter(
            (contact) => contact.group === filter
        );
    }
    return (
        <>
            <div>
                Filters:
                <select value={filter} onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value="Home">Home </option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name: </th>
                        <th>Email:</th>
                        <th>Group:</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredContacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.group}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default Table;
