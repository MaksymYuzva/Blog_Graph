import { createContext } from "react";

export const ThemeContext = createContext();

export const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
