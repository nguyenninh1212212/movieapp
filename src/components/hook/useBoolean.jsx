import React,{useState} from 'react'

function useBoolean(initialValue = false) {
    const [value, setValue] = useState(initialValue);
  
    const setTrue = () => setValue(true);
  
    const setFalse = () => setValue(false);
  
    const toggle = () => setValue(!value);
  
    return [value, { setTrue, setFalse, toggle }];
  }

export default useBoolean