import { CardType } from "@/app/types";
import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ image, title, description }: CardType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="card image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
