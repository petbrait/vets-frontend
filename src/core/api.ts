import { AppConfig } from "@/utils/AppConfig";
import { setPatients } from "@/actions";
import axios from "axios";

// @ts-ignore
const fetcher = (...args) =>
  // @ts-ignore
  fetch(...args).then((res) => {
    if (res.status === 200) return res.json();
    throw Error("An error has occurred.");
  });

const PATIENTS_URL = `${AppConfig.apiUrl}/get_patients`;

export function getPatients(dispatch: any) {
  console.log("Runn..");
  axios(PATIENTS_URL)
    .then(({ data }) => {
      dispatch(setPatients(data));
      console.log("res", data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
