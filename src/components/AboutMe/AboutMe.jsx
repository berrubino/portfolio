import React from "react";
import "../AboutMe/aboutMe.css";
import { Box, Typography } from "@mui/material";
import blackSeparator from "../../assets/blackSeparator.svg";
import Navbar from "../Navbar/Navbar";

function AboutMe() {
  return (
    <div className="aboutMe-container">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <h1 className="aboutMe-title">ABOUT ME</h1>
      </Box>
      <Box sx={{ marginTop: "5vh", display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            display: "flex",
            fontFamily: "Open Sans, sans-seri",
            fontSize: "2vw",
            color: "black",
            width: "70vw",
          }}
        >
          Soy Bernardo, tengo 26 años y estoy dando mis primeros pasos en el
          mundo del desarrollo. Después de mucho tiempo buscando una carrera que
          me apasione y finalmente encontré en el desarrollo de software una
          oportunidad emocionante. A lo largo de mi vida, he explorado diversas
          áreas y he adquirido habilidades en comunicación, organización y
          planificación, las cuales considero fundamentales para mi desarrollo
          profesional. Además, he valorado la importancia de brindar un
          excelente servicio al cliente y de adaptarme rápidamente a diferentes
          situaciones. Estoy ansioso por explorar nuevas tecnologías, aprender
          de los desafíos y crecer profesionalmente
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          className="blackSeparator"
          src={blackSeparator}
          alt="black separator"
        />
      </Box>
    </div>
  );
}

export default AboutMe;
