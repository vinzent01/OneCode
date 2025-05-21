import { FaCode } from "react-icons/fa";
import styles from "../app/page.module.css";

export function LogoIcon() {
  return (
    <span className={styles.logoIcon}>
      <FaCode size={48} color="#60aaff" />
    </span>
  );
}