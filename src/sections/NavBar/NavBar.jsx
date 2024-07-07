import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav id="Nav" className={styles.container}>
      <a href="/" className={styles.logolabel}>
        chub.
      </a>
      <ul>
        <li className={styles.active}>
          <a href="/Projects">About</a>
        </li>
        <li>
          <a href="/pricing">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
