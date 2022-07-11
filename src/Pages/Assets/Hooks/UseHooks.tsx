import * as queries from "./HookQueries";
import { IAssets } from "../Interfaces";
import { useQuery, UseQueryResult } from "react-query";

export const useGetAssets = (): UseQueryResult<IAssets[], Error> => {
  return useQuery<IAssets[], Error>(
    ["assets"],
    async () => await queries.getAssets(),
    {
      staleTime: 60 * 60 * 1000,
    }
  );
};
