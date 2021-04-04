import React, { useCallback } from 'react';
import { useOnClickOutside } from './useClickOutside';

export const useDelayInputCollapse = (
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>,
  inputRef: React.RefObject<HTMLInputElement>
) => {
  const getHandler = useCallback(() => {
    let timer;
    timer = setTimeout(() => {
      setShowInput(false);
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, [setShowInput]);

  useOnClickOutside(inputRef, getHandler);
};
