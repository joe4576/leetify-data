import { LeetifyApi } from "@/lib/api/leetify";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const api = new LeetifyApi();

export const Stats = () => {
  const { steamId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["stats", steamId],
    queryFn: async () => {
      const res = await api.v3.profileMatchesList({
        steam64_id: steamId,
      });

      return res.data;
    },
    enabled: !!steamId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
