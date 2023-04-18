import { SET_PATIENTS } from "@/actions/types";

export const setPatients = (payload?: any) => ({
  type: SET_PATIENTS,
  payload,
});
