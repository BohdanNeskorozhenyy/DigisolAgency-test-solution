import { createContext } from 'react';

type ContextDataType = {
  use: (c: any) => void;
  toggleSave: (c: any) => void;
  savedAssets: { [key: string]: boolean };
};

export const GlobalContext = createContext<ContextDataType>({
  use: () => {},
  toggleSave: () => {},
  savedAssets: {},
});
