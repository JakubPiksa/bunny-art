import { FC } from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <p>HEADER</p>
    </div>
  );
};
