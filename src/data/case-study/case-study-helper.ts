import { CASESTUDY } from "./index";

export const getCaseStudy = (slug: string) => {
  return CASESTUDY[slug as keyof typeof CASESTUDY];
};