import { useState } from 'react';

const useLocalStorage = (key:string, initialValue:string) => {
  const isBrowser = typeof window !== 'undefined';
  const [storedValue, setStoredValue] = useState(() => {
    if (isBrowser) {
      const valueFromLocalStorage = localStorage.getItem(key);
      return valueFromLocalStorage
        ? JSON.parse(valueFromLocalStorage)
        : initialValue;
    }
  });

  const setValue = (value: string) => {
    setStoredValue(value);
    if (isBrowser) localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
