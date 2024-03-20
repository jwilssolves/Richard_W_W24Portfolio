import React from 'react';
import DropdownMenu from '../components/shared/dropdownMenu';

const ProfessionalWork = () => {
  const professionalItems = [
    { label: 'Work Project 1', value: 'https://jwilssolves.github.io/Safe_and_Sound_Website/' },
 
  ];

  const handleSelect = (value) => {
    window.location.href = value; 
  };

  return (
    <div className="container mx-auto px-4">
      <DropdownMenu items={professionalItems} onSelect={handleSelect} />
    </div>
  );
};

export default ProfessionalWork;
