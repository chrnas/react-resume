import { Program } from "./Program";
import { School } from "./School";
import { Skill } from "./Skill";

export interface Education {
  program: Program;
  description: string;
  school: School;
  startDate: string;
  examDate: string;
  skills: Skill[];
}
