import { CoursesType } from "@/app/types";
import { BoxHeader, Categories, Card } from "..";
import styles from "./Courses.module.css";

export default function Courses({ title, content }: CoursesType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.marginBottom}>
        <BoxHeader title={title} />
      </div>

      <div className={styles.marginBottom}>{/* <Categories /> */}</div>

      <div className={styles.cardWrapper}>
        {content.map((content, index) => (
          <Card
            key={index}
            image={content.image}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </div>
  );
}
