import { SET_PATIENTS } from "@/actions/types";

const initialState = {
  patients: [],
};

export const patientsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PATIENTS:
      return { ...state, patients: action.payload };
    default:
      return state;
  }
};
