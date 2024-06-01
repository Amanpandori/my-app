import React, { useState } from 'react';

const DropdownList = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>{options[0].label}</button>
            {isOpen && (
                <ul className="dropdown-content">
                    {options.map((option, index) => (
                        <li key={index}><a href="#">{option.label}</a></li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownList;