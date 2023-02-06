import styles from "./Login.module.scss";
import LoginForm from "@/components/molecules/LoginForm/LoginForm";

const Login = () => {
  return (
    <div id={styles.template_login}>
      <LoginForm />
    </div>
  );
};
export default Login;
