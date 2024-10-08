import { createContext, useState } from 'react';

// Tạo Context
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}> 
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };
