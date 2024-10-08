import React, { useContext } from 'react';
import { ThemeContext } from '@/components/StudyContext/ThemeContext'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
};

export default ThemeSwitch;