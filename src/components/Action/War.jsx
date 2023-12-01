import React, {  useState } from 'react';
import MenuChild from './menuChild';

const War = () => {
    const str='Avengers'
  return (
    <div>
      <MenuChild imdbIDsToFilter={str} />
    </div>
  );
};

export default War;
