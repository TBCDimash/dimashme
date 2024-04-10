import { Dispatch, SetStateAction, useState } from 'react';

export interface UseMenuValues {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function useMenu(): UseMenuValues {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen,
  };
}
