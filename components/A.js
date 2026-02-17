import styles from '../styles/A.module.css'
import Link from "next/link";

export default function A({ href, text }) {
  return (
    <Link href={href}>
      <p className={styles.link}>{text}</p>
    </Link>
  );
}
