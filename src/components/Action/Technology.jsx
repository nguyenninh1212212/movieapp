import React, {  useState } from 'react';
import MenuChild from './menuChild';

const Technology = () => {
    const str='Star'
  return (
    <div>
      <MenuChild imdbIDsToFilter={str} />
    </div>
  );
};

export default Technology;
