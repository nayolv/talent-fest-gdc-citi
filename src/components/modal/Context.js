import React, {useState} from 'react';


export const ThemeContext = React.createContext()

export const Context = (props) => {

    const changeColors = {
        background: ""
    }
    const [changeColor, setChangeColor] = useState(changeColors)

  return <ThemeContext.Provider value ={{changeColor, setChangeColor}}>
      {props.children}
  </ThemeContext.Provider>;
};


