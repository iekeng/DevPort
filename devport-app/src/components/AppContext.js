import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || null);

  return (
    <AppContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
