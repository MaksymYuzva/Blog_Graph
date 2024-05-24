import styles from "@/app/components/menu/Menu.module.scss";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Most popular</h2>
      <div className={styles.items}>
        <div className={styles.imageContainer}>
          <Image
            src="/culture.png"
            alt="fashion"
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
