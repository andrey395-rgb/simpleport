import Headroom from "react-headroom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Headroom>
    <nav id="Nav" className={styles.container}>
      <a href="/" className={styles.logolabel}>
        chub<span>.</span>
      </a>
      <ul>
        
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className={styles.active}>
          <a href="#personal">About Chub</a>
        </li>
      </ul>
    </nav>
    </Headroom>
  );
}

export default NavBar;
