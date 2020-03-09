import React from 'react';
import { Dropdown as BDropdown, DropdownButton } from 'react-bootstrap';

const Dropdown = ({ data, onSelect, value }) => (
    <DropdownButton id="dropdown-basic-button" title={value || ''}>
        {data.map(item => (
            <BDropdown.Item
                as="button"
                onSelect={(_, e) => onSelect(Number(e.target.innerText))}
                key={item}
                active={item === value}
            >
                {item}
            </BDropdown.Item>
        ))}
    </DropdownButton>
);

export default Dropdown;
