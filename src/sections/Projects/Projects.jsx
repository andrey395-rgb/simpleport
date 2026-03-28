import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/assets/cssec-website.png";
import spotiCover from "../../assets/assets/Art/SpotiDupe/Cover.png";
import ProjectCard from "../../common/ProjectCard";
import Pokeball from "../../assets/assets/pokeball.png";
import Order from "../../assets/assets/orderbuild.png";
import Jebran from "../../assets/assets/Jebran_thumbnail.png";
// import { Swiper, SwiperSlide } from "swiper/react";

function Projects() {
  return (
    // const scrollers = document.querySelectorAll(".scroller");

    <section id="projects" className={styles.container}>
      {/* <marquee behavior="" direction=""> */}
      <div className={styles.scroller}>
        <div className={styles.sectionTitle}>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
          <h11>Projects</h11>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://addu-cssec-website.netlify.app/"}
          alt={"CSSEC Website"}
          p={"Official CSSEC Website"}
        />
        <ProjectCard
          src={spotiCover}
          link={"https://github.com/andrey395-rgb/spotidupe"}
          alt={"SpotiDupe"}
          p={"Music Player"}
        />

        <ProjectCard
          src={Pokeball}
          link={"https://github.com/andrey395-rgb/POKEDEX-INTERACTIVE"}
          alt={"Pokedex"}
          p={"Pokémon database"}
        />
        {/* <ProjectCard
          src={Order}
          link={"https://github.com/andrey395-rgb/OrderBuilder"}
          alt={"OrderBuilder"}
          p={"manage order histories"}
        />
        <br /> */}
        <ProjectCard
          src={Jebran}
          link={"https://github.com/andrey395-rgb/OrderBuilder"}
          alt={"Jebran Website"}
          p={"E-commerce Website"}
        />

        {/* <ProjectCard
          src={viberr}
          link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"POKEDEX!"}
          p={"Search/Sort Functions"}
        />
        <ProjectCard
          src={viberr}
          link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"VIBERR"}
          p={"Streaming App"} */}
      </div>
    </section>
  );
}

export default Projects;
