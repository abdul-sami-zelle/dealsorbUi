import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
          <div style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
     <TextField
        label="Min Price"
        variant="outlined"
        value={value[0]}
        InputProps={{
          readOnly: true,
        }}
        sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: '#666666',
                borderWidth:'2px'
              },
              "&:hover fieldset": {
                borderColor: '#666666',
                borderWidth:'2px'
              },
            },
          }}
        InputLabelProps={{
            style: {
              color: '#666666',
              fontWeight:'600'
            },
          }}
      />
      <h2>
        -
      </h2>
      <TextField
        label="Max Price"
        variant="outlined"
        value={value[1]}
        InputProps={{
          readOnly: true,
        }}
        sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: '#666666',
                borderWidth:'2px'
              },
              "&:hover fieldset": {
                borderColor: '#666666',
                borderWidth:'2px'
              },
            },
          }}
        InputLabelProps={{
            style: {
              color: '#666666',
              fontWeight:'600'
            },
          }}
      />
     </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
            color: '#1A9BF7', // Change the slider's color to the primary color
            "& .MuiSlider-thumb": {
              backgroundColor: '#1A9BF7', // Change the color of the slider thumb
            },
            "& .MuiSlider-rail": {
              backgroundColor: '#666666', // Change the color of the rail
            },
          }}
      />
   
    </Box>
  );
}
