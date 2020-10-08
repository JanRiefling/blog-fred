import useSWR from "swr";

import userFetcher from "../api/jwt-util";

export default function useUser() {
  const { data, mutate, error } = useSWR("api/jwt-util", userFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
