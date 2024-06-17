import { useEffect, useState } from "react";

export const useDebounce = (
  initValue: string,
  length: number
): [string, React.Dispatch<React.SetStateAction<string>>, string] => {
  const [inputValue, setInputValue] = useState<string>(initValue);
  const [debouncedValue, setThrottledValue] = useState<string>(initValue);

  useEffect(() => {
    if (inputValue.length === 0 || inputValue.length % length === 0) {
      setThrottledValue(inputValue);
    }
  }, [inputValue, length]);

  return [inputValue, setInputValue, debouncedValue];
};
