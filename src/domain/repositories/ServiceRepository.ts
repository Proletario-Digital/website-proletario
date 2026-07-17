import { ServicesData } from "../entities/Service";

export interface ServiceRepository {
  fetchServices(): Promise<ServicesData>;
}
