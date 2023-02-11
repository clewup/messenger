import styles from "./RegisterForm.module.scss";
import { Form, Formik } from "formik";
import { IRegister } from "@/types/user";
import Input from "@/lib/mui/components/Input/Input";
import Button from "@/lib/mui/components/Button/Button";
import { useUser } from "@/contexts/User/User";
import { useEffect } from "react";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const { user, accessToken, isAuthenticated, isLoading, error, register } =
    useUser();
  const router = useRouter();

  const registerFields: IRegister = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword",
  };

  const initialValues: IRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  useEffect(() => {
    if (user && accessToken && isAuthenticated) {
      router.push("/");
    }
  }, [user, accessToken, isAuthenticated]);

  const handleSubmit = (values: IRegister) => {
    register(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, handleSubmit }) => {
        return (
          <Form id={styles.molecule_register_form}>
            <Input
              label={"First Name"}
              value={values.firstName}
              onChange={(e) =>
                setFieldValue(registerFields.firstName, e.target.value)
              }
            />
            <Input
              label={"Last Name"}
              value={values.lastName}
              onChange={(e) =>
                setFieldValue(registerFields.lastName, e.target.value)
              }
            />
            <Input
              label={"Email"}
              value={values.email}
              onChange={(e) =>
                setFieldValue(registerFields.email, e.target.value)
              }
              type={"email"}
            />
            <Input
              label={"Password"}
              value={values.password}
              onChange={(e) =>
                setFieldValue(registerFields.password, e.target.value)
              }
              type={"password"}
            />
            <Input
              label={"Confirm Password"}
              value={values.confirmPassword}
              onChange={(e) =>
                setFieldValue(registerFields.confirmPassword, e.target.value)
              }
              type={"password"}
            />
            <Button type={"submit"} isLoading={isLoading}>
              Register
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
