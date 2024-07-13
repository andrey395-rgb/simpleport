import React from "react";
import styles from "./Personal.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/assets/Art/IMG20240713080705.jpg";
import movie from "../../assets/assets/Art/peakpx (1).jpg";
import music from "../../assets/assets/Art/musiccover.jpg";

function Personal() {
  return (
    <section id="personal" className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.sectionTitle}>
          <h1>Chobbies!</h1>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movie}
          // link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"ARCHIVES"}
          p={"Film faves!"}
        />
        <ProjectCard
          src={viberr}
          // link={"#projects"}
          alt={"ARTSIE"}
          p={"Art hobbies!"}
        />
        <ProjectCard
          src={music}
          // link={"https://shabbydoo63.github.io/CS1130/"}
          alt={"BEATS"}
          p={"Music staples!"}
        />
      </div>
    </section>
  );
}

export default Personal;
