import { BoxHeaderTypes } from "@/app/types";
import styles from "./BoxHeader.module.css";

export default function BoxHeader({ title }: BoxHeaderTypes) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.seeAll}>See All</p>
    </div>
  );
}
