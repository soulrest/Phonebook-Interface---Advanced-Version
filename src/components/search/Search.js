import React from 'react'

const Search = props => {
    return (
        <div className="search-field">
            <h3>matches found:</h3>
            {props.matches.map(el => (
                <div key={el.phone_number} className="find-contact">
                    <div className="find-contact-flex">
                        <div className="find-contact-name">{el.name}</div>
                        <div className="find-contact-phone-number">{el.phone_number}</div>
                    </div>
                    <div className="find-contact-address">{el.address}</div>
                </div>
            ))}
        </div>
    )
}

export default Search;