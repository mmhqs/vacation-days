import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://api.invertexto.com/v1/holidays/';
const HOLIDAYS_QUERY_KEY = ['holidays'];

const fetchHolidays = async (year: string, state: string) => {
/*   const response = await axios.get(`${API_URL}/${year}?token=23210|KmBAuGadKwys1tAG3cs8uiPTSHZdpfZH&state=${state}`); */
  const response = await axios.get(`${BASE_URL}${year}?token=23210|KmBAuGadKwys1tAG3cs8uiPTSHZdpfZH&state=${state}`);
  return response.data;
};

export const useGetHolidays = (year: string, state: string) => {
  return useQuery({
    queryKey: [...HOLIDAYS_QUERY_KEY, year],
    queryFn: () => fetchHolidays(year, state),
    enabled: !!year && !!state, 
    retry: false,
  });
};