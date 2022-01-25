import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useTransfers = () => {
  const [getDataTransfer, setGetDataTransfer] = useState([]);
  const API = async () => {
    const resp = await dataApi.get("/clientData");
    setGetDataTransfer(resp.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      API();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //------------Recuperando ID
  const [selectValue, setSelectValue] = useState("");
  const [selectValueRetirement, setSelectValueRetirement] = useState("");

  const recoverySelectValue = (e) => {
    setSelectValue(e.target.value);
  };
  const recoverySelectValueRet = (e) => {
    setSelectValueRetirement(e.target.value);
  };
  //------------Filter para obtener objeto
  const result = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValue)
  );
  const resultRetirement = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValueRetirement)
  );

  const [importe, setImporte] = useState(0);
  const handleChange = (e) => {
    setImporte(e.target.value);
  };

  const [mapeoRet, setMapeoRet] = useState({
    id: "",
    name: "",
    balance: "",
    client: "",
    typeAccount: "",
    maximumAmount: "",
    displayAccountNumber: "",
    email: "",
  });
  const [mapeoDep, setMapeoDep] = useState({
    id: "",
    name: "",
    balance: "",
    client: "",
    typeAccount: "",
    maximumAmount: "",
    displayAccountNumber: "",
    email: "",
  });
  const mapeoRetirement = () => {
    resultRetirement.map((item) =>
      setMapeoRet({
        id: item.id,
        name: item.name,
        balance: item.balance,
        client: item.client,
        typeAccount: item.typeAccount,
        maximumAmount: item.maximumAmount,
        displayAccountNumber: item.displayAccountNumber,
        email: item.email,
      })
    );
  };
  const mapeo = () => {
    result.map((item) =>
      setMapeoDep({
        id: item.id,
        name: item.name,
        balance: item.balance,
        client: item.client,
        typeAccount: item.typeAccount,
        maximumAmount: item.maximumAmount,
        displayAccountNumber: item.displayAccountNumber,
        email: item.email,
      })
    );
  };
  //----------Refleja cuenta de retiro(Patch)
  const [balanceDep, setBalanceDep] = useState("");
  const balanceDeposito = (balance, retiro) => {
    setBalanceDep(balance - parseInt(retiro));
  };
  const patchApiOwn = async (id) => {
    await dataApi.patch(`/clientData/${id}`, {
      balance: balanceDep,
    });
  };
  //----------Refleja cuenta de deposito(Patch)
  const [balance, setBalance] = useState("");
  const newBalance = (balance, deposito) => {
    setBalance(balance + parseInt(deposito));
  };
  const patchApiOwnDep = async (id) => {
    await dataApi.patch(`/clientData/${id}`, {
      balance: balance,
    });
  };

  const [descriptionTransfer, setDescriptionTransfer] = useState("");

  const recoveryDescription = (e) => {
    setDescriptionTransfer(e.target.value);
  };
  const hoy = new Date();
  const hora = hoy.getHours() + ":" + hoy.getMinutes();

  const [hour, setHour] = useState("");

  const getHour = (time) => {
    setHour(time)
  }


  return {
    selectValue,
    recoverySelectValue,
    selectValueRetirement,
    recoverySelectValueRet,
    getDataTransfer,
    result,
    resultRetirement,
    handleChange,
    importe,
    mapeoRetirement,
    mapeoRet,
    mapeo,
    mapeoDep,
    balanceDep,
    balanceDeposito,
    patchApiOwn,
    balance,
    newBalance,
    patchApiOwnDep,
    descriptionTransfer,
    recoveryDescription,
    hora,
    hour,
    getHour
  };
};
