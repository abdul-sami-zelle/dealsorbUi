import Grid from '@mui/material/Grid';
import React, { useState } from 'react';

import '../mainCategoriesPage.css'
import { FormControlLabel, Checkbox, FormGroup, Typography } from '@mui/material';


const items = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
  ];

  export default function CheckboxList() {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (event) => {
      const itemId = parseInt(event.target.name);
      if (event.target.checked) {
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
        console.log(setSelectedItems)
      } else {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((id) => id !== itemId)
          
        );
        console.log(setSelectedItems)
      }
    };
  
    return (
      <div>
        <FormGroup>
          {items.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onChange={handleCheckboxChange}
                  name={item.id.toString()}
                  sx={{
                    color: '#1A9BF7',
                    '&.Mui-checked': {
                      color: '#1A9BF7', // Change the color of the checked checkbox

                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 20, // Change the size of the checkbox icon
                    },
                  }}
                />
              }
              label={item.label}
            />
          ))}
        </FormGroup>
        
      </div>
    );
  }
  