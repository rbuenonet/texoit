import React, { useState } from 'react';

import { SelectboxProps } from './props';
import {Select} from './style';

const Selectbox: React.FC<SelectboxProps> = ({value, options, onSelect}) => {
  const [selected, setSelected] = useState<string>(value ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <Select value={selected} onChange={handleChange}>
        {selected === '' &&<option value="">Selecione uma opção</option> }
        {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </Select>
  );
};

export default Selectbox;

