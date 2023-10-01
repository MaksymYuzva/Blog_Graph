"use client";
import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import ThemeToggle from "../themeToggle/themeToggle";

export const Header = async () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Blog
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/", label: "Main" },
              { key: "/profile", label: "Profile" },
            ]}
          />
          <ThemeToggle />
        </div>

        <div className={styles.headerRight}></div>
      </div>
    </Layout.Header>
  );
};
