import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="logo" width={174} height={56} />

      <div className={styles.main}>
        <div className={styles.storeDropDown}>
          <Image src="/store.svg" alt="store" width={16} height={16} />

          <span>Store</span>
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
          <Image src="/profile.svg" alt="frame" width={48} height={48} />

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
