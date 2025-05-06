import { useQuery } from "@tanstack/react-query";
import { getRounds } from "../services/roundService";
import { Round } from "../types/roundTypes";

export const useRounds = () => {
  return useQuery<Round[]>({
    queryKey: ["rounds"],
    queryFn: getRounds,
  });
};
