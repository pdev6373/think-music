"use client";
import { useState } from "react";
import { Header, Sidenav } from "..";
import styles from "./Layout.module.css";

export default function Layout({ children }: any) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <Header setShowMobileNav={setShowMobileNav} />
      <Sidenav
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <main
        className={
          showMobileNav ? `${styles.main} ${styles.disableMain}` : styles.main
        }
      >
        {children}
      </main>
    </>
  );
}
