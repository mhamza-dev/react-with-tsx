import apiClient from "./api-client";

interface ExtendedProps {
  id: number;
}

class UserServices {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  update<T extends ExtendedProps>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }
}
const create = (endpoint: string) => new UserServices(endpoint);
export default create;
