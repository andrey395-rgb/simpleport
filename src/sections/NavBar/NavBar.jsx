import Headroom from "react-headroom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Headroom>
      <nav id="Nav" className={styles.container}>
        <a href="#hero" className={styles.logolabel}>
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
            <a href="#personal">About chub.</a>
          </li>
        </ul>
        {/* <div class="bx bx-menu" id="menu-icon"></div> */}
      </nav>
    </Headroom>
  );
}

export default NavBar;
