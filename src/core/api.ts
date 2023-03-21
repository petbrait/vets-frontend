import useSWR from "swr";
import { AppConfig } from "@/utils/AppConfig";

// @ts-ignore
const fetcher = (...args) =>
  // @ts-ignore
  fetch(...args).then((res) => {
    if (res.status === 200) return res.json();
    throw Error("An error has occurred.");
  });

const PATIENTS_URL = `${AppConfig.apiUrl}/get_patients`;

export function UsePatients() {
  const { data, error, isLoading } = useSWR(PATIENTS_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    patients: data,
    isLoading,
    isError: error,
  };
}
