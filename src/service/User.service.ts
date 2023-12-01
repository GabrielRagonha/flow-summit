import { Coordinator, Schedules } from "@/interfaces/UsersResponse";
import { HttpService } from "@/service/Http.service";

const httpService = new HttpService();

export async function getCoordinator() {
  try {
    const user = JSON.parse(localStorage.getItem("user")!);

    const response = await httpService.get(`user_coodinator/${user.idUser}`);

    const { coordinator } = response.data;

    return coordinator;
  } catch (error: any) {
    throw new error(error.message);
  }
}

export async function getSchedule() {
  try {
    const user = JSON.parse(localStorage.getItem("user")!);

    const { data } = await httpService.get<Schedules[]>(`schedules_all/`);

    return data.filter((schedule: any) => schedule.idUser === user.idUser);
  } catch (error: any) {
    throw new error(error.message);
  }
}
