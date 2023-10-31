"use client";
import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { FormOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import ThemeToggle from "../themeToggle/themeToggle";
import AuthLinks from "../authLinks/authLinks";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <Link href="/">
            <h2 className={styles.headerTitle}>
              <FormOutlined />
              Blog
            </h2>
          </Link>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/", label: "Main" },
              { key: "/profile", label: "Profile" },
              { key: "/post", label: "Post" },
            ]}
          />
          <ThemeToggle />
        </div>

        <div className={styles.headerRight}>
          <AuthLinks />
        </div>
      </div>
    </Layout.Header>
  );
};
