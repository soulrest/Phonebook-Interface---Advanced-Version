import React from 'react';

const AddContactForm = props => {
    return (
        <form onSubmit={props.onAddNewContact} onChange={props.onHandleChange} className="add-contact-form">
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" id="name" required />
            <label htmlFor="address">Address:</label>
            <input name="address" type="text" id="address" required />
            <label htmlFor="phone">Phone number:</label>
            <input name="phonenumber" type="number" id="phone" required />
            <button>Add</button>
        </form>
    )
};

export default AddContactForm;