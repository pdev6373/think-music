"use client";

import { useState } from "react";
import styles from "./Categories.module.css";

const categories = ["Piano", "Guitar", "Saxophone", "Bass", "Afro Beat"];

export default function Categories() {
  const [currentTab, setCurrentTab] = useState("Piano");

  return (
    <div className={styles.wrapper}>
      {categories.map((category) => (
        <div
          key={category}
          className={
            currentTab === category
              ? styles.currentCategoryWrapper
              : styles.categoryWrapper
          }
          onClick={() => setCurrentTab(category)}
        >
          <p
            className={
              currentTab === category ? styles.currentCategory : styles.category
            }
          >
            {category}
          </p>
        </div>
      ))}
    </div>
  );
}
