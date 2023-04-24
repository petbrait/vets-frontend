import useSWR from "swr";
import { ENDPOINTS } from "@/constants/points";

// @ts-ignore
const fetcher = (...args) =>
  // @ts-ignore
  fetch(...args).then((res) => {
    if (res.status === 200) return res.json();
    throw Error("An error has occurred.");
  });

export function UsePatients() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.PATIENTS_URL, fetcher, {
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

export function UseAppoiments() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.APPOIMENTS_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    appoiments: data,
    isLoading,
    isError: error,
  };
}

export function UseNotes() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.NOTES_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    notes: data,
    isLoading,
    isError: error,
  };
}

export function UseGoals() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.GOALS_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    goals: data,
    isLoading,
    isError: error,
  };
}
