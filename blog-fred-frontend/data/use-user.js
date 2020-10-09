import useSWR from "swr";
import userFetcher from "../lib/user-fetcher"


 function useUser() {
  const { data, mutate, error } = useSWR("api/jwt-util", userFetcher);
    
  return {
    user: data,
    mutate
  };
}

export default useUser;