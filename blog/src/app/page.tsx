"use client";
import { GetServerSidePropsContext } from "next";

import Image from "next/image";
import { Main } from "./components/main/main";
import Card from "./components/card/card";
import CardList from "./components/cardList/cardList";
import Menu from "./components/menu/Menu";
import styles from "@/app/homepage.module.scss";
import MaxWidthWrapper from "./components/maxWidthWrapper/maxWidthWrapper";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className={styles.container}>
          <CardList />
          <Menu />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
