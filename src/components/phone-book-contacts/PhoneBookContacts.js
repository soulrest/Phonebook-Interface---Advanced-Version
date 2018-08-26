import React from 'react'

const PhoneBookContacts = props => {

    function onDelete(item) {
        props.onDeleteContact(item);
    }

    return (
        <div className="contacts">
            {props.contacts.map(el => (
                <div key={el.phone_number} className="contact">
                    <div className="contact-flex">
                        <div className="contact-name">{el.name}</div>
                        <div className="contact-phone-number">{el.phone_number}</div>
                        <button onClick={onDelete.bind(this, el)}>delete</button>
                    </div>
                    <div className="contact-address">{el.address}</div>
                </div>
            ))}
        </div>
    );
};

export default PhoneBookContacts;