import { TECHNOLOGY } from "./index";

export const getTechnology = (slug: string) => {
  return TECHNOLOGY[slug as keyof typeof TECHNOLOGY];
};