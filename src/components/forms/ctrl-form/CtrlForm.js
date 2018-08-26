import React from 'react';

const CtrlForm = props => {
    return (
        <form className="control-form">
            <div className="sort-data">
                <label htmlFor="sort">Sort</label>
                <select onChange={props.onSort} name="sort" id="sort">
                    {props.options.map(el => <option key={el} value={el.toLowerCase()}>{el}</option>)};
                </select>
            </div>
            <div className="search-data">
                <input onChange={props.onSearch} type="text" name="search" id="search" placeholder="Search..." />
            </div>
        </form>
    );
};

export default CtrlForm;