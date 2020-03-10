import React from 'react';
import { Dropdown as BDropdown, DropdownButton } from 'react-bootstrap';

const Dropdown = ({ data, onSelect, value, title }) => (
    <div className="d-flex flex-column mr-2">
        <span>{title}</span>
        <input type="number" value={value} onChange={e => onSelect(Number(e.target.value))} />
        <DropdownButton id="dropdown-basic-button" title={value}>
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
    </div>
);

export default Dropdown;
