"use client";

import NavLink from "next/link";
import styles from "./sidenav.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavType {
  text: string;
  route: string;
  icon: any;
}

const navs: NavType[] = [
  {
    text: "Overview",
    route: "/",
    icon: "home",
  },
  {
    text: "Explore Courses",
    route: "/explore-courses",
    icon: "explore",
  },
  {
    text: "My Learning",
    route: "/my-learning",
    icon: "learning",
  },
  {
    text: "store",
    route: "/store",
    icon: "store",
  },
  {
    text: "Library",
    route: "/library",
    icon: "library",
  },
  {
    text: "Music Tools",
    route: "/music-tools",
    icon: "tools",
  },
  {
    text: "My Account",
    route: "/my-account",
    icon: "account",
  },
  {
    text: "Help",
    route: "/help",
    icon: "help",
  },
  {
    text: "logout",
    route: "/logout",
    icon: "logout",
  },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navs.map((nav) => {
          const isCurrent = pathname === nav.route;

          return (
            <li key={nav.route}>
              <NavLink
                href={nav.route}
                className={isCurrent ? styles.currentLink : styles.link}
              >
                <Image
                  src={`${nav.icon}.svg`}
                  alt="nav icon"
                  width={isCurrent ? 20 : 16}
                  height={isCurrent ? 20 : 16}
                  className={isCurrent ? styles.currentIcon : styles.icon}
                />
                <p
                  className={
                    isCurrent ? styles.currentLinkText : styles.linkText
                  }
                >
                  {nav.text}
                </p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
