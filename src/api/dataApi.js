import axios from "axios";

export const dataApi = axios.create({
    baseURL:` https://api-talent-fest.herokuapp.com`
  });