import React, { useState } from 'react';
import usa from '../../public/usa.png';
import uk from '../../public/uk.png';
import germany from '../../public/germany.png';
import tick from '../../public/tick.png';
import tick2 from '../../public/tick2.png';

const countries = [
  { name: 'United States', flagUrl: usa },
  { name: 'United Kingdom', flagUrl: uk },
  { name: 'Germany', flagUrl: germany },
  // Add more countries as needed
];

function CountryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <>
      {countries.map((country, index) => (
        <div
          key={index}
          onClick={() => handleCountrySelect(country)}
          style={{
            position: 'relative', // Required for absolute positioning of tick icon
            marginRight: '10px',
            border: selectedCountry === country ? '2px solid white' : 'none',
            padding: '5px', // Optional: Add padding for better visualization
          }}
        >
          {selectedCountry === country && (
            <img
              src={tick2}
              alt="Tick Icon"
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-10px',
                width: '20px',
                height: '20px',
              }}
            />
          )}
          <img
            src={country.flagUrl}
            height={'30px'}
            width={'30px'}
            className="flag"
            alt={country.name}
          />
        </div>
      ))}
    </>
  );
}

export default CountryDropdown;
