import { useQuery } from '@apollo/client';
import { githubQuery } from "utils/github-query";

export const useFetchData = () => {
  const { loading, data, error } = useQuery(githubQuery);

  return { loading, data, error };
}
