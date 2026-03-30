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
import CV from "../../assets/assets/RamirezResumé2026.docx.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useTypewriter } from "react-simple-typewriter";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramlight : instagramdark;
  const facebookIcon = theme === "light" ? facebooklight : facebookdark;
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;

  const openResume = () => {
    const width = 900;
    const height = 700;
    const left = window.screenX + Math.max(0, (window.outerWidth - width) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - height) / 2);

    const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    const w = window.open(CV, "resume", features);
    // Fallback for cases where popup blockers prevent `window.open`.
    if (!w) window.location.href = CV;
  };

  const [typeEffect] = useTypewriter({
    words: ["Ramirez", "'Chubs'"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <section id="hero" className={styles.container}>
      <div data-aos="fade-left" data-aos-duration="2000" className={styles.colorModeContainer}>
        <img className={styles.Hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="2000"className={styles.info}>
        <h1>
          <span className={styles.shabby}>👾 Andrey {typeEffect}
            </span>
        </h1>
          <h2>Fullstack Developer</h2>
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
          <button type="button" className="hover" onClick={openResume}>
            Resume
          </button>
      </div>
    </section>
  );
}

export default Hero;
