import { ILogin } from "../types/user";
import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

export const postLogin = (login: ILogin) => {
  return axios.post(`${apiUrls.AUTH}${apiEndpoints.LOGIN}`, login);
};
