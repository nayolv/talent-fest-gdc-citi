import React from 'react';

export const ThemeContext = React.createContext()


export const Body = () => {


    const fullBody = document.body;

    const {changeColor, setChangeColor} = React.useContext(ThemeContext)

  return <div>
      fullBody.style = background: changeColor.background
  </div>;
};


