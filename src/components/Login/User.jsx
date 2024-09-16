import React from "react";
import styles from "./Login.module.css";

const User = ({ onUserChange }) => {
  // onUserChange kan tekniskt sätt heta vad den vill
  const onUserComplete = (e) => {
    onUserChange(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={styles.userContainer}>
      User
      <input type="text" onBlur={onUserComplete} placeholder="Username" />
    </div>
  );
};

export default User;
