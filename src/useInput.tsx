import React, { useState } from 'react';

const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      },
    },
  };
};

export default useInput;
