import Link from "next/link";
import styles from "./Portfolio.module.css";
import Modal from "@/components/Modal";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className={styles.cover}>
      <div className={styles.title}>
        <h1>Portfolio</h1>
        <h2>
          <Link className={styles.a} href="/">
            Back to home
          </Link>
        </h2>
      </div>
      <div className={styles.project}>
        <Image
          // className={styles.logo}
          src="/store-project.png"
          alt="store-project"
          width={900}
          height={700}
          style={{
            objectFit: "cover",
            borderRadius: "50px",
          }}
          priority
        />

        <div className={styles.projectButtons}>
          <button
            className={styles.button91}
            onClick={() => setOpenModal(true)}
          >
            About
          </button>
          <Modal
            open={openModal}
            text="The 3D Model store was our second unit project at GA. It uses react without backend."
            onClose={() => setOpenModal(false)}
          />

          <a href="https://store-3d-model-app.herokuapp.com/store/">
            <button className={styles.button91}>Visit Site</button>
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <Image
          // className={styles.logo}
          src="/battleship-project.png"
          alt="battleship-project"
          width={800}
          height={600}
          style={{
            objectFit: "cover",
            borderRadius: "50px",
          }}
          priority
        />

        <div className={styles.projectButtons}>
          <button
            className={styles.button91}
            onClick={() => setOpenModal(true)}
          >
            About
          </button>
          <Modal
            open={openModal}
            text="This project was final project of our first unit at GA. The project is done in vanila JS and and I a very proud of it. It is classic battleship game but its done without separation of players for technical limitations of JS. Even though it is fully functional andis following the main concept of the game"
            onClose={() => setOpenModal(false)}
          />

          <a href="https://bazilevsd.github.io/battleship-game/">
            <button className={styles.button91}>Visit Site</button>
          </a>
        </div>
      </div>
    </div>
  );
}
