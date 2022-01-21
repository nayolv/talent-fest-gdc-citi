import { useState } from "react/cjs/react.development";

function UseRegister() {
    const [typeRegister, setTypeRegiste] = useState('')
    const [typeAccount, setTypeAccount] = useState(true)

    const ownAccount = (e) => {
        setTypeAccount(true)
    }

    const newRegister = (e) => {
        setTypeRegiste(e.target.value);
      };

    
  return {
      typeAccount,
      ownAccount,
      newRegister,
      typeRegister
  }
}

export default UseRegister;
