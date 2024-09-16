import React from "react";
import styles from "./Login.module.css";

const Password = () => {
  const onPasswordComplete = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.passwordContainer}>
      Password
      <input type="password" onBlur={onPasswordComplete} />
    </div>
  );
};

export default Password;
