import React, { useContext, useState } from 'react';
import { CursorVariant } from './types';

interface CursorContextValue {
  cursorVariant: CursorVariant;
  setCursorVariant: React.Dispatch<React.SetStateAction<CursorVariant>>;
}

const CursorContext = React.createContext<CursorContextValue | null>(null);

export function CursorContextProvider({ children }: React.PropsWithChildren) {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  const value = {
    cursorVariant,
    setCursorVariant,
  };

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export const useCursorContext = (): CursorContextValue => {
  const value = useContext(CursorContext);

  if (value === null) {
    throw new Error('CursorContext must be initialized first');
  }

  return value;
};
