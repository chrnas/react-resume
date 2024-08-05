import React from "react";
import "./ProjectGrid.css";
import { Project } from "../../interfaces/Project";
import ProjectGridItem from "../ProjectGridItem/ProjectGridItem";

const ProjectGrid: React.FC<{projects: Project[]}> =({projects})=>{

   return(
    <>
        <div className="grid-container">
            {projects.map((project: Project, index: number)=><ProjectGridItem key={index} project={project}/>)}
        </div>
    </>
   ) 
};

export default ProjectGrid;