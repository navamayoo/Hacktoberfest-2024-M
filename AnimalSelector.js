import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function AnimalSelector() {
  const animals = ['Cat', 'Dog', 'Bird', 'Fish', 'Lion'];
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handleChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <FormControl variant="outlined" style={{ minWidth: 200 }}>
        <InputLabel>Animal</InputLabel>
        <Select
          value={selectedAnimal}
          onChange={handleChange}
          label="Animal"
        >
          {animals.map((animal) => (
            <MenuItem key={animal} value={animal}>
              {animal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default AnimalSelector;
