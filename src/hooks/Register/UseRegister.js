import { useState } from "react/cjs/react.development";

function UseRegister() {
    const [typeRegister, setTypeRegiste] = useState('')

    const newRegister = (e) => {
        setTypeRegiste(e.target.value);
      };

    
  return {
      newRegister,
      typeRegister
  }
}

export default UseRegister;
