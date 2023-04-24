export interface Patient {
  id: number;
  name: string;
  race: string;
  owner_name: string;
  owner_phone: string;
  total_sessions: number;
}

export interface Appoiment {
  id: number;
  objetive: string;
  pet_name: string;
  time: string;
  session_duration: number;
  session_link: string;
}

export interface Note {
  id: number;
  title: string;
  date: Date;
  details: string;
}

export interface Goal {
  id: number;
  title: string;
  date: Date;
  details: string;
  status: number;
}
