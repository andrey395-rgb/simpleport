import styles from "./HeroStyles.module.css";
// import heroImg from "../../assets/assets/1x1softcopy-modified.png";
import heroImg from "../../assets/assets/ModifiiedIcon.png";

import sun from "../../assets/assets/sun.svg";
import moon from "../../assets/assets/moon.svg";
import instagramlight from "../../assets/assets/github-light.svg";
import facebooklight from "../../assets/assets/facebook-fill.svg";
import linkedinlight from "../../assets/assets/linkedin-light.svg";
import instagramdark from "../../assets/assets/github-dark.svg";
import facebookdark from "../../assets/assets/facebook-circle-fill-one.svg";
import linkedindark from "../../assets/assets/linkedin-dark.svg";
import CV from "../../assets/assets/Ramirez_ResumeComp.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useTypewriter } from "react-simple-typewriter";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramlight : instagramdark;
  const facebookIcon = theme === "light" ? facebooklight : facebookdark;
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;
  const [typeEffect] = useTypewriter({
    words: ["Ramirez", "'Chubs'"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.Hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          <span className={styles.shabby}>👾 Andrey {typeEffect}
            </span>
        </h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://github.com/andrey395-rgb" target="_blank">
              <img src={instagramIcon} alt="IG Icon" />
            </a>
            <a
              href="https://www.facebook.com/nathanandrey.ramirez"
              target="_blank"
            >
              <img src={facebookIcon} alt="IG Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrey-ramirez-b024a9303/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="IG Icon" />
            </a>
          </span>
          <p className={styles.description}>
            I am a college student taking up a Bachelor of Science <br></br> in Computer
            Science in Ateneo de Davao University.<br></br>| Internship Ready |
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
      </div>
    </section>
  );
}

export default Hero;
