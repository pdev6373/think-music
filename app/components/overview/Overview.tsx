import Image from "next/image";
import styles from "./Overview.module.css";
import { OverviewType } from "../../types";

export default function Overview({
  icon,
  title,
  description,
  value,
}: OverviewType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <Image src={icon} alt="overview" width={40} height={40} />

        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <p className={styles.value}>{value}</p>
    </div>
  );
}
