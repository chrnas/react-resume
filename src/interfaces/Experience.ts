import { Company } from "./Company";
import { Skill } from "./Skill";
import { Location } from "./Location";

export interface Experience {
  name: string;
  description: string;
  company: Company;
  skills: Skill[];
  date: string;
  location: Location;
}
