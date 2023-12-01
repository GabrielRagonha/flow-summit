export interface User {
  idUser: string,
  name: string,
  email: string,
  createdAt: date,
  updatedAt: date,
}

export interface Coordinator {
  idCoordinator: string
  idUser: string
  institution: string
}

export interface Schedules {
  idScheduleUser: string;
  idUser: string;
  idEvent: string;
  createdAt: string;
  updatedAt: string;
}