import { Skill } from "./Skill";

export interface Project {
    name:string;
    description:string;
    image:string;
    skills:Skill[];
    githubLink:string;
}