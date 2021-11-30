import useSWR from 'swr';

const baseUrl = 'http://localhost:3000/api/profesionales';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useUser = id => {
  const { data, error } = useSWR(`/api/profesionales/id/${id}`, fetcher);
  return {
    profesional: data,
    isLoading: !error && !data,
    isError: error,
  };
};
