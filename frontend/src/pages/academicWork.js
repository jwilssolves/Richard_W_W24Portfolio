import React from 'react';
import DropdownMenu from '../components/shared/dropdownMenu';

const AcademicWork = () => {
  const academicItems = [
   
    { label: 'Project 1', value: 'project1' },
  
  ];

  const handleSelect = (value) => {
  };

  return (
    <div className="container mx-auto px-4">
      <DropdownMenu items={academicItems} onSelect={handleSelect} />
     
    </div>
  );
};

export default AcademicWork;
