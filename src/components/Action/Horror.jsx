import React, {  useState } from 'react';
import MenuChild from './menuChild';

const Horror = () => {
  const str='Horror'
  return (
    <div>
      <MenuChild imdbIDsToFilter={str} />
    </div>
  );
};

export default Horror;
