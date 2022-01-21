import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useTransfers = () => {
  const [selectValue, setSelectValue] = useState("");

  const recoverySelectValue = (e) => {
    setSelectValue(e.target.value);
  };

  const [getDataTransfer, setGetDataTransfer] = useState([]);
  const API = async () => {
    const resp = await dataApi.get("/clientData");
    setGetDataTransfer(resp.data);
  };

  useEffect(() => {
    API();
  }, []);

  return {
    selectValue,
    recoverySelectValue,
    getDataTransfer,
  };
};
