import Link from "next/link";
import styles from "./Contact.module.css";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className={styles.cover}>
      <div className={styles.title}>
        <h1>Contact me</h1>
        <h2>
          <Link className={styles.a} href="/">
            Back to home
          </Link>
        </h2>
      </div>
      <ContactForm />
    </div>
  );
}
