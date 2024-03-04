import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState({ login: false });
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isSellButtonVisible, setIsSellButtonVisible] = useState(false); // Add state for Sell button visibility
  const [havebikebtn, sethavebikebtnvisible] = useState(false);
  const [haveeventbtn, sethaveeventbtnvisible] = useState(false);
  const [haveroombtn, sethaveroombtnvisible] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        search,
        setSearch,
        category,
        setCategory,
        refresh,
        setRefresh,
        isSellButtonVisible, // Provide state for Sell button visibility
        setIsSellButtonVisible,
        havebikebtn,
        haveeventbtn,
        sethavebikebtnvisible,
        sethaveeventbtnvisible,
        haveroombtn,
        sethaveroombtnvisible
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
