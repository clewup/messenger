import styles from "./GroupForm.module.scss";
import Input from "@/lib/mui/components/Input/Input";
import { Form, Formik, FormikValues } from "formik";
import { IGroup } from "@/types/group";
import { Socket } from "socket.io-client";
import React, { SetStateAction } from "react";
import Button from "@/lib/mui/components/Button/Button";

interface IProps {
  socket: Socket;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const GroupForm: React.FC<IProps> = ({ socket, setModalOpen }) => {
  const groupFormValues = {
    id: "id",
    name: "name",
  };

  const initialValues: IGroup = {
    id: `${Math.floor(Math.random() * 10000) + 1}`,
    name: "",
  };

  const handleSubmit = (values: IGroup) => {
    socket.emit("createGroupRequest", values);
    setModalOpen(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form id={styles.molecule_group_form}>
            <Input
              label={"Name"}
              value={values.name}
              onChange={(e) => {
                setFieldValue(groupFormValues.name, e.target.value);
              }}
            />
            <div className={styles.group_form_action_row}>
              <Button type={"submit"}>Create</Button>
              <Button onClick={() => setModalOpen(false)} color={"error"}>
                Cancel
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default GroupForm;
