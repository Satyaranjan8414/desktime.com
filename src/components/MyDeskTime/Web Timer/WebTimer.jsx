import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import CountDown from './Timer/components/countDown/CountDown';
import "./WebTimer.css"
function WebTimer() {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  const headerClass = `Main ${themeMode}`;
  const toggleThemeMode = () => {
    toggleTheme(  (themeMode === 'dark') ? 'light' : 'dark'  );
  }
  return (
    <>
    
  <div className="container_background">
    <div className="Main_container"> 
      <header className={headerClass}>
      <h2 style={{color:"beige",fontStyle:"italic",textDecoration:"underline",border:"5px dashed white"}}>Starting Track Your Time</h2>
      <CountDown />
        <button className={`theme-toggle-btn icon-${themeMode}`} onClick={toggleThemeMode}>
          Toggle {themeMode === "dark" ? "Light" : "Dark"} Mode
        </button>
       
      </header>
      
    </div>
    </div>
    </>
  );
}

export default WebTimer;
