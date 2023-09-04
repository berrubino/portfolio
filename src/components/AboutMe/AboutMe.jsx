import React from "react";
import "../AboutMe/aboutMe.css";
import { Box, Typography } from "@mui/material";
import blackSeparator from "../../assets/blackSeparator.svg";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at
          fuga iusto! Nulla magnam facere sed iusto nam odit, dicta quidem et
          eum saepe voluptate fugiat? Odit quos accusamus distinctio? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          doloribus aliquid repellendus fuga ab provident, fugit, libero
          voluptatum vero natus distinctio nulla numquam at, labore
          necessitatibus ex et reprehenderit itaque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus sint molestias inventore.
          Modi, aperiam ratione. Autem, odit soluta. Mollitia necessitatibus
          rerum ipsam id. Maiores adipisci officia quos dolorum. Veritatis,
          in?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
          aperiam ad! Quis, accusamus minus! Beatae, animi, laborum doloribus
          minus temporibus at nemo enim consequuntur amet exercitationem quis
          reiciendis veniam suscipit?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloribus voluptas saepe nobis omnis maxime autem
          hic, laboriosam voluptatem iusto in tempora officiis corporis
          explicabo veniam expedita eum, assumenda sequi! Necessitatibus? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Dolore odit
          repellat, odio soluta ab natus numquam officiis eius placeat modi
          saepe sapiente vitae suscipit! Nobis quisquam non error maxime soluta.
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
