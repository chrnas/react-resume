import React from "react";
import { AboutInfo } from "../../interfaces/AboutInfo";
import "./AboutList.css";

const AboutList: React.FC<{aboutInfo: AboutInfo}> =({aboutInfo})=>{

   return(
    <>
        <ul className="ul-about-list">
            <li className="li-about-list">
                <p className="bold-first-word"><span>Occupation:</span> {aboutInfo.occupation} </p>
            </li>
            <li className="li-about-list">
                <p className="bold-first-word"><span>Age:</span> {aboutInfo.age} </p>
            </li>
            <li className="li-about-list">
                <p className="bold-first-word"><span>Location:</span> {aboutInfo.location} </p>
            </li>
            <li className="li-about-profil">
                <div className="list-text">{aboutInfo.profil}</div>
            </li>
        </ul>
    </>
   ) 
};

export default AboutList;