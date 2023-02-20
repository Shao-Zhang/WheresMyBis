import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function DropDown(props) {
    
  const [spec, setSpec] = React.useState('');

  const handleChange = (event) => {

    setSpec(event.target.value);
    props.querySpec(event.target.value);

  };

  return (
    <div>
        <h2>Select your spec to see loot!</h2>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Spec</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={spec}
            onChange={handleChange}
            autoWidth
            label="Spec"
            >
            <MenuItem value="DemonologyWarlock">Demonology Warlock</MenuItem>
            <MenuItem value="AfflictionWarlock">Affliction Warlock</MenuItem>
            <MenuItem value="FireMage">Fire Mage</MenuItem>
            </Select>
        </FormControl>
    </div>
  );
}

export default DropDown;