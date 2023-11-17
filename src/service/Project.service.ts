import { HttpService } from "@/service/Http.service";
import { ProjectResponse } from "@/interfaces/ProjectRespose";

export async function getProjects() {
  try {
    const httpService = new HttpService();

    return await httpService.get<ProjectResponse>("events_all");
  } catch (error: any) {
    console.error("Erro: ", error.message);
  }
}
