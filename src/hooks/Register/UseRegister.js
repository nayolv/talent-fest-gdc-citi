import { useState } from "react";

function useRegister() {
    const [typeRegister, setTypeRegiste] = useState('')
    const [checked, setChecked] = useState(false);
    const [dataRegister, setDataRegister] = useState({
        client: "",
        name: "",
        displayAccountNumber: "",
        maximumAmount: 0,
        email: "",
      });
    

    const handleChecked = () => {
        setChecked(!checked);//Valor por default
    } 
    
    const handleInputChange = (e) => {
        setDataRegister({
            ...dataRegister, 
          [e.target.name]: e.target.value,
        });
      };
    
      const sendData = (e)=>{
        e.preventDefault();
        //console.log(dataRegister)
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
