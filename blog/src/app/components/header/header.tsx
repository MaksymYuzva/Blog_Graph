"use client";
import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import ThemeToggle from "../themeToggle/themeToggle";
import * as Api from "@/app/api";
import { checkAuth } from "@/app/utils/checkAuth";
import { GetServerSidePropsContext } from "next";

export const Header = async () => {
  // const authToken = await checkAuth(ctx);
  // if ("redirect" in authToken) {
  //   return authToken;
  // }
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
              { key: "/posts", label: "Main" },
              { key: "/profile", label: "Profile" },
            ]}
          />
          <ThemeToggle />
        </div>

        <div className={styles.headerRight}>
          {/* {authToken ? (
            <Popover
              trigger="click"
              content={
                <Button onClick={onClickLogout} type="primary" danger>
                  Exit
                </Button>
              }
            >
              <Avatar>A</Avatar>
            </Popover>
          ) : (
            <Menu
              className={styles.topMenu}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[selectedMenu]}
              onSelect={({ key }) => router.push(key)}
              items={[{ key: "/auth", label: "Login" }]}
            />
          )} */}
        </div>
      </div>
    </Layout.Header>
  );
};
