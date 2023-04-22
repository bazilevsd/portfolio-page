import styles from "./Button.module.css";
import Link from "next/link";
export default function Button() {
  return (
    <div className={styles.body}>
      <Link className={styles.button} href="/menu/contact">
        Contact Me
      </Link>
    </div>
  );
}
