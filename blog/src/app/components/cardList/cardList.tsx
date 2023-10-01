"use client";
import React from "react";
import Pagination from "../pagination/pagination";
import styles from "@/app/components/cardList/CardList.module.scss";
const cardList: React.FC = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default cardList;
