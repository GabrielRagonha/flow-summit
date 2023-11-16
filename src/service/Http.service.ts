export class HttpService {
  private baseUrl = "http://localhost:3000/"
  public async post<T>(url: string, body: any): Promise<{ status: number, data: T }> {
    const rawResponse = await fetch(this.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
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
        "Content-Type": "application/json"
      }
    })

    const { status } = rawResponse

    const response = await rawResponse.json()

    return { status, data: response };
  }
}
