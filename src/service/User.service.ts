import { Coordinator } from "@/interfaces/UsersResponse";
import { HttpService } from "@/service/Http.service";

const httpService = new HttpService();

export async function getCoordinator(): Promise<Coordinator> {
  try {
    const user = JSON.parse(localStorage.getItem("user")!);

    const { data } = await httpService.get<Coordinator>(
      `user_coodinator/${user.idUser}`,
    );

    return data

  } catch (error: any) {
    throw new error(error.message);
  }
}