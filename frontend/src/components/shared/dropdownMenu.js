import React from 'react';
import './dropdownMenu.css'; 

const DropdownMenu = ({ items, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="form-select">
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
