import React, { useState } from "react";

const contact_form_init_state = {
    name: "",
    email: "",
    group: "",
};
const ContactForm = ({ getContact }) => {
    const [values, setValues] = useState({ ...contact_form_init_state });
    const { name, email, group } = values;

    // handle change for input state warning
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    // onsubmit handler for not to refresh my page.
    const handleSubmit = (e) => {
        e.preventDefault();
        getContact(values);
        setValues({ ...contact_form_init_state });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="group">Group:</label>
                <select
                    name="group"
                    id="group"
                    value={group}
                    onChange={handleChange}
                >
                    <option value="">Select Group</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <br />

            <input type="submit" value={"create new contact"} />
        </form>
    );
};

export default ContactForm;
