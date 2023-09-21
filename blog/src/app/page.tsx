import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import Menu from "./components/menu/Menu";
import Featured from "./components/featured/featured";
import cardList from "./components/cardList/cardList";
import categoryList from "./components/categoryList/categoryList";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Featured />
        <categoryList />
      </div>
      <div className={styles.content}>
        <cardList />
        <Menu />
      </div>
    </>
  );
}
