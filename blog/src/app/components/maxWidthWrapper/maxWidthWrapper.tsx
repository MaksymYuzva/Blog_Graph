import { ReactNode } from "react";
import styles from "./maxWidthWrapper.module.scss";
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={styles.MaxWidthWrapper}>{children}</div>;
};

export default MaxWidthWrapper;
