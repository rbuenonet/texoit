import React from 'react';

import { Selectbox } from '../../atoms/Selectbox';

import { SelectYearProps } from './props';

const SelectYear: React.FC<SelectYearProps> = ({onSelect}) => {
  const currentYear = new Date().getFullYear();
  const options = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => currentYear - index);

  return (
    <Selectbox options={options} onSelect={onSelect} />
  );
};

export default SelectYear;

