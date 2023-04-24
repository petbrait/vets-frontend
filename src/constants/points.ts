import { AppConfig } from "@/utils/AppConfig";

export const ENDPOINTS = Object.freeze({
  PATIENTS_URL: `${AppConfig.apiUrl}/get_patients`,
  APPOIMENTS_URL: `${AppConfig.apiUrl}/get_appoiments`,
  NOTES_URL: `${AppConfig.apiUrl}/get_notes`,
  GOALS_URL: `${AppConfig.apiUrl}/get_goals`,
});
