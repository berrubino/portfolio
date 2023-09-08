import React from "react";
import "../Skills/skills.css";
import { Box } from "@mui/material";
import blackSeparator from "../../assets/blackSeparator.svg";
//languages
import javascriptIcon from "../../assets/skills/languages/javascriptIcon.svg";

//Back
import expressIcon from "../../assets/skills/back/expressIcon.svg";
import jsonIcon from "../../assets/skills/back/jsonWebTokenIcon.svg";
import mongodbIcon from "../../assets/skills/back/mongodbIcon.svg";
import nodeIcon from "../../assets/skills/back/nodeIcon.svg";
import postgresIcon from "../../assets/skills/back/postgresIcon.svg";
import sequelizeIcon from "../../assets/skills/back/sequelizeIcon.svg";

//Front
import axiosIcon from "../../assets/skills/front/axiosIcon.svg";
import bootstrapIcon from "../../assets/skills/front/bootstrapIcon.svg";
import cssIcon from "../../assets/skills/front/cssIcon.svg";
import htmlIcon from "../../assets/skills/front/htmlIcon.svg";
import materialUiIcon from "../../assets/skills/front/materialUiIcon.svg";
import reactIcon from "../../assets/skills/front/reactIcon.svg";
import reduxIcon from "../../assets/skills/front/reduxIcon.svg";

function SkillItem({ src, alt, text }) {
  return (
    <div className="icon-container">
      <img className="skills-icons-styles" src={src} alt={alt} />
      <div className="icon-text">{text}</div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-container">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <h1 className="skills-title">SKILLS</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "30vw",
        }}
      >
        <Box sx={{ width: "50vw" }}>
          <h4 className="skills-subtitles">Languages:</h4>
          <SkillItem
            src={javascriptIcon}
            alt="javascript icon"
            text="Javascript"
          />
        </Box>

        <Box sx={{ width: "50vw" }}>
          <h4 className="skills-subtitles">Back:</h4>
          <SkillItem src={nodeIcon} alt="Node Icon" text="Node Js" />
          <SkillItem src={expressIcon} alt="Express Icon" text="Express" />
          <SkillItem
            src={postgresIcon}
            alt="PostgresSQL Icon"
            text="PostgresSQL"
          />
          <SkillItem
            src={sequelizeIcon}
            alt="Sequelize Icon"
            text="Sequelize"
          />
          <SkillItem src={mongodbIcon} alt="Mongodb Icon" text="Mongodb" />
          <SkillItem src={jsonIcon} alt="Json Icon" text="Jwt" />
        </Box>

        <Box sx={{ width: "45vw" }}>
          <h4 className="skills-subtitles">Front:</h4>
          <SkillItem src={reactIcon} alt="React Icon" text="React" />
          <SkillItem src={axiosIcon} alt="Axios Icon" text="Axios" />
          <SkillItem src={reduxIcon} alt="Redux Icon" text="Redux" />
          <SkillItem src={htmlIcon} alt="Html Icon" text="HTML" />
          <SkillItem src={cssIcon} alt="CSS Icon" text="CSS" />
          <SkillItem
            src={materialUiIcon}
            alt="MaterialUi Icon"
            text="MaterialUi"
          />
          <SkillItem
            src={bootstrapIcon}
            alt="Bootstrap Icon"
            text="Bootstrap"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          className="skills-blackSeparator"
          src={blackSeparator}
          alt="black separator"
        />
      </Box>
    </div>
  );
}

export default Skills;
