import { FaCode } from "react-icons/fa";
import styles from "../app/css/logo.module.css";

export function Logo() {
  return (
    <span className={styles.logoBrand}>
      <FaCode size={36} color="#60aaff" style={{ marginRight: 10 }} />
      <span className={styles.logoText}>OneCode</span>
    </span>
  );
}