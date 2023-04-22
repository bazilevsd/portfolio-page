import Link from "next/link";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.cover}>
      <div className={styles.title}>
        <h1>Skills</h1>
        <h2>
          <Link className={styles.a} href="/">
            Back to home
          </Link>
        </h2>
      </div>
      <ul className={styles.text}>
        My skills include:
        <li>DOM Manipulation - fetch for APIs</li>
        <li>Express MVC architecture + REST Framework</li>
        <li>Best practices for debugging and searching to issues online</li>
        <li>Wire frames and documentation and user stories</li>
        <li>Responsive web design</li>
        <li>Basic git knowledge + Pull requests</li>
        <li>MongoDB: mongo shell + mongoose for CRUD</li>
        <li>Express Framework with and without view engine</li>
        <li>JWT & Authorization</li>
        <li>React Hooks</li>
        <li>React Classes</li>
        <li>React Context</li>
        <li>Axios & api services</li>
        <li>Data structures & algorithms</li>
        <li>Big O notation</li>
        <li>OOP in javascript</li>
        <li>Command Line</li>
      </ul>
    </div>
  );
}
