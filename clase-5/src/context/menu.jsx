import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";


const initState = {
    menuState: 0,
    handleToggleMenu: () =>{},
    closeMenuOnScroll: () =>{},
}

export const MenuContext = createContext(initState);
const { Provider } = MenuContext;

export const ContextMenu = ({ children }) => {
  const [menuState, setMenuState] = useState(0);

 

  const handleToggleMenu = () => {
    if (menuState === 0) {
      setMenuState((prev) => prev + 1);
    } else {
      setMenuState(0);
    }
  };

  const closeMenuOnScroll = () => {
    const scrollY = window.scrollY;
    if( menuState === 0) return;
    if (scrollY !== 0 && menuState === 1) {
      setMenuState(0);
      
    }
  }
  return (
    <Provider
      value={{
        menuState,
        handleToggleMenu,
        closeMenuOnScroll,
      }}
    >
      {children}
    </Provider>
  );
};