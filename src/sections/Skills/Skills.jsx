import styles from "./SkillsStyles2.module.css";
import checkMarkIcon from "../../assets/assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import html from "../../assets/assets/html5-original.svg"
import JS from "../../assets/assets/javascript-plain.svg"
import CSS from "../../assets/assets/css3-original.svg"
import RJS from "../../assets/assets/react-original.svg"
import C from "../../assets/assets/c-original.svg"
import CTT from "../../assets/assets/c-original.svg"
import PY from "../../assets/assets/python-original.svg"
import JAV from "../../assets/assets/java-plain-wordmark.svg"
import dart from "../../assets/assets/Art/icons8-dart.svg"
import fireBase from "../../assets/assets/Logomark_Full Color.svg"


function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={JS} skill="JavaScript" />
        <SkillList src={CSS} skill="CSS" />
        <SkillList src={RJS} skill="React JS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={C} skill="C" />
        <SkillList src={CTT} skill="C++" />
        <SkillList src={PY} skill="Python" />
        <SkillList src={JAV} skill="Java" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={dart} skill="dart" />
        <SkillList src={fireBase} skill="firebase" />
        {/* <SkillList src={CTT} skill="C++" />
        <SkillList src={PY} skill="Python" />
        <SkillList src={JAV} skill="Java" /> */}
      </div>
      <hr />

    </section>
  );
}

export default Skills;
