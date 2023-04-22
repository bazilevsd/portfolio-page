import React from "react";
import styles from "./laptop.module.scss";
import Image from "next/image";

export default function Laptop() {
  return (
    <div className={styles.container}>
      <div className={styles.laptop}>
        <div className={styles.laptop__screen}>
          <Image
            // className={styles.logo}
            src="/battleship-game.jpg"
            alt="Darya Bazilevskaya"
            width={600}
            height={300}
            style={{ objectFit: "cover", borderRadius: "50px" }}
            priority
          />
          <div className={styles.divButtons}>
            <button>About</button>
            <a href=" https://bazilevsd.github.io/battleship-game/">
              <button>Visit Site</button>
            </a>
          </div>
        </div>
        <div className={styles.laptop__bottom}>
          <div className={styles.laptop__under}></div>
        </div>
        <div className={styles.laptop__shadow}></div>
      </div>
    </div>
  );
}
