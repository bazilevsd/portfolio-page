import Link from "next/link";
import styles from "./PortfolioPage.module.css";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
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
      <Portfolio />
    </div>
  );
}
