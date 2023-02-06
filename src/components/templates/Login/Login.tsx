import styles from "./Login.module.scss";
import SignIn from "@/components/organisms/SignIn/SignIn";
import Logo from "@/components/atoms/Logo/Logo";

const Login = () => {
  return (
    <div id={styles.template_login}>
      <Logo />
      <SignIn />
    </div>
  );
};
export default Login;
