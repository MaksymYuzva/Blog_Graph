import Pagination from "../pagination/pagination";
import styles from "@/app/components/cardList/CardList.module.scss";
function cardList() {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
}

export default cardList;
