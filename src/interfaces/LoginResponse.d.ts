import { User } from "./UsersResponse";

export interface LoginResponse {
  token: string,
  user: User,
}