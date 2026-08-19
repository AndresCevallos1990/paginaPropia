import { createContext } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({ children }) => {

  return (
    <Provider
      value={{
       
      }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;


