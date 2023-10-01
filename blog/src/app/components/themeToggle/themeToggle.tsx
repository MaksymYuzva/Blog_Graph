"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.scss";
import { Switch } from "antd";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return <Switch onClick={toggle} />;
};

export default ThemeToggle;
