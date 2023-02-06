import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import RegisterForm from "@/components/molecules/RegisterForm/RegisterForm";
import Button from "@/lib/mui/components/Button/Button";

const SignIn: React.FC = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div id={styles.organism_sign_in}>
      <div className={styles.header}>
        <Button onClick={() => setLogin(true)} variant={"text"} color={"info"}>
          LOGIN
        </Button>
        <Button onClick={() => setLogin(false)} variant={"text"} color={"info"}>
          REGISTER
        </Button>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};
export default SignIn;
