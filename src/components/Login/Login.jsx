import Password from "./Password";
import User from "./User";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        Login
        <User onUserChange={setUser} />
        <Password onPasswordChange={setPassword} />
      </div>
    </>
  );
};

export default Login;
