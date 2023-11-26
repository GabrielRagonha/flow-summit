import router from "@/router";

export class HttpService {
  private baseUrl = "http://localhost:3000/"
  public async post<T>(url: string, body: any): Promise<{ status: number, data: T }> {
    const rawResponse = await fetch(this.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })

    const { status } = rawResponse

    const response = await rawResponse.json()

    return { status, data: response };
  }

  public async get<T>(url: string): Promise<{ status: number, data: T }> {
    const rawResponse = await fetch(this.baseUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })

    const { status } = rawResponse

    if(status === 406) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
    }

    const response = await rawResponse.json()

    return { status, data: response };
  }
}
