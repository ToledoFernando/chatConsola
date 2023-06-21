import axios, { AxiosResponse } from "axios";
import dataConfig from "../../config.json";

export const requestHTTP = async (
  metodo: string,
  url: string,
  body?: any,
  token?: string | null
): Promise<any> => {
  let response: AxiosResponse;
  const configheaders = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  };

  switch (metodo) {
    case "GET":
      response = await axios.get(dataConfig.apiURL + url, configheaders);
      return response.data;

    case "POST":
      response = await axios.post(dataConfig.apiURL + url, body, configheaders);
      return response.data;

    case "PUT":
      response = await axios.put(dataConfig.apiURL + url, body, configheaders);
      return response.data;

    case "DELETE":
      response = await axios.delete(dataConfig.apiURL + url, configheaders);
      return response.data;

    default:
      throw new Error("Método HTTP no válido");
  }
};
