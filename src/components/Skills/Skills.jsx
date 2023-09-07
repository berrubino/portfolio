import React from "react";
import "../Skills/skills.css";
import { Box } from "@mui/material";
import postgresIcon from "../../assets/skills/postgresIcon.svg";
import javascriptIcon from "../../assets/skills/javascriptIcon.svg";
import blackSeparator from "../../assets/blackSeparator.svg";

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
        <Box sx={{ width: "40vw" }}>
          <h4 className="skills-languages">Languajes:</h4>

          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
        </Box>

        <Box sx={{ width: "40vw" }}>
          <h4 className="skills-languages">Back:</h4>

          <img
            className="skills-icons-styles"
            src={postgresIcon}
            alt="postgres icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
          />
        </Box>

        <Box sx={{ width: "40vw" }}>
          <h4 className="skills-languages">Front:</h4>

          <img
            className="skills-icons-styles"
            src={postgresIcon}
            alt="postgres icon"
          />
          <img
            className="skills-icons-styles"
            src={javascriptIcon}
            alt="javascript icon"
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
