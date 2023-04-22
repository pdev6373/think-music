import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src="/logo.svg" alt="logo" fill />
      </div>

      <div className={styles.main}>
        <div className={styles.storeDropDown}>
          <Image src="/store.svg" alt="store" width={16} height={16} />

          <span className={styles.storeText}>Store</span>
          <Image src="/down.svg" alt="dowm" width={24} height={24} />
        </div>

        <Image
          src="/notification.svg"
          alt="frame"
          width={24}
          height={24}
          className={styles.notification}
        />

        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image src="/profile.svg" alt="frame" fill />
          </div>

          <div>
            <p className={styles.name}>Samuel Oladokun</p>
            <p className={styles.occupation}>Student</p>
          </div>

          <Image src="/down.svg" alt="frame" width={24} height={24} />
        </div>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={24}
        height={24}
        className={styles.menu}
      />
    </header>
  );
};
