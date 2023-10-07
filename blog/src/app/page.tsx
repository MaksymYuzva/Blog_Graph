"use client";
import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import { Main } from "./components/main/main";
import Card from "./components/card/card";
import CardList from "./components/cardList/cardList";
export default function Home() {
  return (
    <>
      <Main />
      <CardList />
    </>
  );
}
