import { useState } from "react";

function useRegister() {
    const [typeRegister, setTypeRegiste] = useState('')
    const [checked, setChecked] = useState(true);
    const [dataRegister, setDataRegister] = useState({
        client: "",
        name: "",
        displayAccountNumber: "",
        maximumAmount: 0,
        email: "",
      });
    

    const handleChecked = (e) => {
        setChecked(!e.target.checked)
      //  console.log(checked)
    } 
    
    const handleInputChange = (e) => {
        setDataRegister({
            ...dataRegister, 
          [e.target.name]: e.target.value,
        // typeAccount: checked
        });
        //console.log(dataRegister);
      };
    
      const sendData = (e)=>{
        e.preventDefault();
        console.log(dataRegister)
      } 

    const newRegister = (e) => {
        setTypeRegiste(e.target.value);
      };

    
  return {
      newRegister,
      typeRegister,
      sendData,
      dataRegister,
      handleInputChange,
      checked,
      handleChecked
  }
}

export default useRegister;
