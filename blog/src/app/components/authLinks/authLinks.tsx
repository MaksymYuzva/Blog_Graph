import styles from "@/app/components/authLinks/authLinks.module.scss";
import { Avatar, Button, Popover } from "antd";
import Link from "next/link";
import * as Api from "@/app/api";

const AuthLinks = () => {
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };
  const status: "authenticated" | "nonauthenticated" = "authenticated";
  return (
    <>
      {status === "nonauthenticated" ? (
        <>
          <Link href="/login">Login</Link>
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
        </>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link} onClick={onClickLogout}>
            Logout
          </span>
        </>
      )}
    </>
  );
};
export default AuthLinks;
