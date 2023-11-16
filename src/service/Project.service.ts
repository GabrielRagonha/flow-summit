import { HttpService } from "@/service/Http.service";
import { ProjectResponse } from "@/interfaces/ProjectRespose";

export async function getProjects() {
  try {
    const httpService = new HttpService();

    const result = await httpService.get<ProjectResponse>("events_all");

    console.log("Service:", result);    
  } catch (error: any) {
    console.error("Erro: ", error.message);
  }
}
