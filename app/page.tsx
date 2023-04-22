import Image from "next/image";
import styles from "./page.module.css";
// import { Overview, BoxHeader, Card, Courses } from "./components";
import Overview from "./components/overview/Overview";
import BoxHeader from "./components/boxHeader/BoxHeader";
import Card from "./components/card/Card";
import Courses from "./components/courses/Courses";
import { OverviewType } from "./types";

const overviews: OverviewType[] = [
  {
    title: "My Instruments",
    description: "Your subscribed instruments",
    value: "1",
    icon: "instrument.svg",
  },
  {
    title: "Performance",
    description: "Your overall performance",
    value: "60%",
    icon: "performance.svg",
  },
  {
    title: "Points",
    description: "The points you have earned",
    value: "25",
    icon: "points.svg",
  },
];

const courseTypes = [
  {
    type: "Ongoing Courses",
    content: [
      {
        image: "course_image.svg",
        title: "Introduction to Guitar",
        description:
          "Duis eget risus condimentum, fermentum mas sa ac, posuere odio.",
      },
      {
        image: "course_image.svg",
        title: "Introduction to Guitar",
        description:
          "Duis eget risus condimentum, fermentum mas sa ac, posuere odio.",
      },
      {
        image: "course_image.svg",
        title: "Introduction to Guitar",
        description:
          "Duis eget risus condimentum, fermentum mas sa ac, posuere odio.",
      },
    ],
  },
  {
    type: "Upcoming Courses",
    content: [
      {
        image: "upcoming_courses_image.svg",
        title: "Introduction to Guitar",
        description:
          "Duis eget risus condimentum, fermentum mas sa ac, posuere odio.",
      },
      {
        image: "upcoming_courses_image.svg",
        title: "Introduction to Guitar",
        description:
          "Duis eget risus condimentum, fermentum mas sa ac, posuere odio.",
      },
      {
        image: "upcoming_courses_image.svg",
        title: "Introduction to Guitar",
        description:
          "Duis eget risus condimentum, fermentum mas sa ac, posuere odio.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      <h3 className={styles.header}>Overview</h3>

      <div className={styles.body}>
        <div className={styles.overviews}>
          {overviews.map((overview) => (
            <Overview
              key={overview.title}
              title={overview.title}
              description={overview.description}
              icon={overview.icon}
              value={overview.value}
            />
          ))}
        </div>

        <div className={styles.courses}>
          {courseTypes.map((courseType) => (
            <Courses
              key={courseType.type}
              title={courseType.type}
              content={courseType.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
