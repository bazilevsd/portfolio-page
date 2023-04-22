import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.cover}>
      <div className={styles.title}>
        <h1>About me</h1>
        <h2>
          <Link className={styles.a} href="/">
            Back to home
          </Link>
        </h2>
      </div>
      <div>
        <p className={styles.text}>
          I have co-managed a software development startup company Adiona since
          2016; my responsibilities include project planning and daily meetings,
          overseeing development process. I am a software developer graduate
          with more than 15 years of strong project coordination and management
          skills. Proficient in HTML, CSS, JavaScript, React, React Native,
          Node, Express, MongoDB, Agile development and Git/GitHub. Proven
          ability to improve processes and operations through strategic
          implementation. Strong problem-solving and team player.
        </p>
      </div>
    </div>
  );
}
