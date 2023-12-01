import React, {  useState } from 'react';
import MenuChild from './menuChild';

const Action = () => {
    const str='Naruto'
  return (
    <div>
      <MenuChild imdbIDsToFilter={str} />
    </div>
  );
};

export default Action;
