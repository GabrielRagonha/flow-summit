import { HttpService } from "@/service/Http.service";
import { EventResponse } from "@/interfaces/EventResponse";
import { getCoordinator } from "@/service/User.service";

const httpService = new HttpService();

export async function createEvent(data: any) {
  try {
    const coordinator = await getCoordinator();

    const formData = {
      idCoordinator: coordinator.idCoordinator,
      name: data.value.name,
      description: data.value.description,
      startDate:
        new Date(data.value.startDate).setUTCHours(0, 0, 0, 0) &&
        new Date(data.value.startDate).toISOString(),
      endDate:
        new Date(data.value.endDate).setUTCHours(0, 0, 0, 0) &&
        new Date(data.value.endDate).toISOString(),
    };

    return await httpService.post<EventResponse>("events", formData);
  } catch (error: any) {
    console.error("Erro: ", error.message);
  }
}

export async function getEvents() {
  try {
    return await httpService.get<EventResponse>("events_all");
  } catch (error: any) {
    console.error("Erro: ", error.message);
  }
}

export async function getEvent(eventId: any) {
  try {
    return await httpService.get<EventResponse>("events/" + eventId);
  } catch (error: any) {
    console.error("Erro: ", error.message);
  }
}
