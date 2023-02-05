import React, { createContext, SetStateAction, useState } from "react";
import { IUser } from "@/types/user";

interface IProps {
  user: IUser | undefined;
  setUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const initialValues: IProps = {
  user: undefined,
  setUser: (() => undefined) as React.Dispatch<any>,
};

const UserContext = createContext<IProps>(initialValues);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
