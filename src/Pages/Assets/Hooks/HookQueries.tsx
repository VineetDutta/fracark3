import axios from "axios";
import { IAssets } from "../Interfaces";

const api = axios.create({ baseURL: process.env.REACT_APP_HOST_URL });

export const getAssets = async (): Promise<IAssets[]> => {
  try {
    const response = await api.get<IAssets[]>("/api/Assets");
    return await response.data;
  } catch (error) {
    throw new Error(`EROOR:${error}`);
  }
};
