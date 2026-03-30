import React from "react";
import styles from "./Personal.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/assets/Art/IMG20240713080705.jpg";
import movie from "../../assets/assets/Art/movie.jpg";
import music from "../../assets/assets/Art/singing-hobby.jpg";

function Personal() {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" id="personal" className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.sectionTitle}>
          <h1>Chobbies!</h1>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movie}
          // link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"MOVIES"}
          p={"Film Enthusiast"}
        />
        <ProjectCard
          src={viberr}
          // link={"#projects"}
          alt={"ART"}
          p={"Artist"}
        />
        <ProjectCard
          src={music}
          // link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"ECHOES"}
          p={"Vocalist"}
        />
      </div>
    </section>
  );
}

export default Personal;
