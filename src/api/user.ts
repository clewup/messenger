import { IRegister, IUser } from "../types/user";
import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

export const postRegister = (register: IRegister) => {
  return axios.post(`${apiUrls.AUTH}${apiEndpoints.USER}`, register);
};

export const putUser = (user: IUser) => {
  return axios.put(`${apiUrls.AUTH}${apiEndpoints.USER}`, user);
};
