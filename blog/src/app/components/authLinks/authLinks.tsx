import styles from "@/app/components/header/Header.module.scss";
import { Avatar, Button, Popover, Menu } from "antd";
import * as Api from "@/app/api";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const AuthLinks = () => {
  const router = useRouter();
  const selectedMenu = usePathname();
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };
  const status: "authenticated" | "nonauthenticated" = "nonauthenticated";
  return (
    <>
      {status === "authenticated" ? (
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
      )}
    </>
  );
};
export default AuthLinks;
