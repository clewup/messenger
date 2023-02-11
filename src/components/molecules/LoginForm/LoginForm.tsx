import styles from "./LoginForm.module.scss";
import { Form, Formik } from "formik";
import { ILogin } from "@/types/user";
import Input from "@/lib/mui/components/Input/Input";
import Button from "@/lib/mui/components/Button/Button";
import { useUser } from "@/contexts/User/User";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { user, accessToken, isAuthenticated, isLoading, error, login } =
    useUser();
  const router = useRouter();

  const loginFormValues: ILogin = {
    email: "email",
    password: "password",
  };

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (user && accessToken && isAuthenticated) {
      router.push("/");
    }
  }, [user, accessToken, isAuthenticated]);

  const handleSubmit = (values: ILogin) => {
    login(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, handleSubmit }) => {
        return (
          <Form id={styles.molecule_login_form}>
            <Input
              label={"Email"}
              value={values.email}
              onChange={(e) =>
                setFieldValue(loginFormValues.email, e.target.value)
              }
              type={"email"}
            />
            <Input
              label={"Password"}
              value={values.password}
              onChange={(e) =>
                setFieldValue(loginFormValues.password, e.target.value)
              }
              type={"password"}
            />
            <Button type={"submit"} isLoading={isLoading}>
              Login
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
