import { SERVICES } from "./index";

export const getService = (slug: string) => {
  return SERVICES[slug as keyof typeof SERVICES];
};