import React from "react";
import "../Home/home.css";
import Navbar from "../Navbar/Navbar";
import separator from "../../assets/separator.svg";
import whiteEmailLogo from "../../assets/socialMedia/white/whiteEmailLogo.svg";
import whiteGithubLogo from "../../assets/socialMedia/white/whiteGithubLogo.svg";
import whiteLinkedinLogo from "../../assets/socialMedia/white/whiteLinkedinLogo.svg";
import blackLinkedinLogo from "../../assets/socialMedia/black/blackLinkedinLogo.svg";
import blackEmailLogo from "../../assets/socialMedia/black/blackEmailLogo.svg";
import blackGithubLogo from "../../assets/socialMedia/black/blackGithubLogo.svg";
import { Box, Typography, useMediaQuery } from "@mui/material";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

function Home() {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const isTabletHorizontal = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div>
      <Navbar />
      <div className="container">
        <Box
          sx={{
            ...(isDesktop
              ? {
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "12vw",
                  justifyContent: "center",
                  minHeight: "94vh",
                }
              : {
                  ...(isTabletHorizontal
                    ? {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginLeft: "12vw",
                        color: "black",
                        minHeight: "94vh",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        minHeight: "94vh",
                      }),
                }),
          }}
        >
          <Typography
            sx={{
              fontFamily: "Advent Pro, sans-serif",
              ...(isMobile
                ? { fontSize: "4vw" }
                : {
                    fontSize: "2.6vw",
                  }),
            }}
          >
            My name is Bernardo Rubino
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              ...(isMobile
                ? {
                    fontSize: "5vw",
                  }
                : {
                    fontSize: "3.2vw",
                  }),
            }}
          >
            Full-stack developer
          </Typography>

          {isMobile && (
            <img className="separator" src={separator} alt="separator" />
          )}

          <Box
            sx={{
              paddingTop: "4vh",
            }}
          >
            <img
              className="icons"
              src={
                isTabletHorizontal || isDesktop
                  ? blackLinkedinLogo
                  : whiteLinkedinLogo
              }
              alt="Linkedin Logo"
            />
            <img
              className="icons"
              src={
                isTabletHorizontal || isDesktop
                  ? blackGithubLogo
                  : whiteGithubLogo
              }
              alt="GitHub Logo"
            />
            <img
              className="icons"
              src={
                isTabletHorizontal || isDesktop
                  ? blackEmailLogo
                  : whiteEmailLogo
              }
              alt="Email Logo"
            />
          </Box>
        </Box>
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
