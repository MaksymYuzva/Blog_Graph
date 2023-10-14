"use client";
import { GetServerSidePropsContext } from "next";

import Image from "next/image";
import { Main } from "./components/main/main";
import Card from "./components/card/card";
import CardList from "./components/cardList/cardList";
import Menu from "./components/menu/Menu";
import styles from "@/app/homepage.module.scss";
export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </>
  );
}
