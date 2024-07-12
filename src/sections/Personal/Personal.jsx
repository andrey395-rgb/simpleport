import React from "react";
import styles from "./Personal.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/assets/Web1.png";

function Personal() {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.sectionTitle}>
          <h1>Chobbies!</h1>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"Artsie"}
          p={"Art hobbies!"}
        />
        <ProjectCard
          src={viberr}
          link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"Artsie"}
          p={"Art hobbies!"}
        />
        <ProjectCard
          src={viberr}
          link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"Artsie"}
          p={"Art hobbies!"}
        />
      </div>
    </section>
  );
}

export default Personal;
