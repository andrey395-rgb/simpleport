import React from "react";
import styles from "./OrganizationStyles.module.css";
import viberr from "../../assets/assets/sysdev-icon.jpg";
import spotiCover from "../../assets/assets/Art/SpotiDupe/Cover.png";
import ProjectCard from "../../common/ProjectCard";
import Pokeball from "../../assets/assets/pokeball.png";
import Order from "../../assets/assets/orderbuild.png";
import Jebran from "../../assets/assets/Jebran_thumbnail.png";
import Minecrafters from "../../assets/assets/delisoft-icon.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";

function Organization() {
  return (

    <section id="projects" data-aos="fade-up" data-aos-duration="1000" className={styles.container}>
      {/* <marquee behavior="" direction=""> */}
      {/* <div className={styles.scroller}>
        <div className={styles.sectionTitle}>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
          <h11>Organizations</h11>
        </div>
      </div> */}
      <h1 className="sectionTitle">Organizations</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://addu-cssec-website.netlify.app/"}
          alt={"Systems Development"}
          p={"SAMAHAN Systems Development"}
        />
        <ProjectCard
          src={Minecrafters}
          link={"https://www.bedrockexplorer.com/@delisoft-studios/golem-elemental"}
          alt={"Game Development"}
          p={"Delisoft Studios"}
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

export default Organization;
