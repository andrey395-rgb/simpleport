import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/assets/Web1.png";
import spotiCover from "../../assets/assets/Art/SpotiDupe/Cover.png";
import ProjectCard from "../../common/ProjectCard";
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
          link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"SYNTHSPHERE"}
          p={"Calculation Functions"}
        />
        <ProjectCard
          src={spotiCover}
          link={"https://github.com/andrey395-rgb/spotidupe"}
          alt={"SpotiDupe"}
          p={"Music Player"}
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
