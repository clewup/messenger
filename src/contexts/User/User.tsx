import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ILogin, IRegister, IUser } from "@/types/user";
import { postLogin } from "@/api/login";
import { postRegister } from "@/api/user";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import { useRouter } from "next/router";

interface IProps {
  user: IUser | null;
  setUser: React.Dispatch<SetStateAction<IUser | null>>;
}

const initialState: IProps = {
  user: null,
  setUser: (() => undefined) as React.Dispatch<any>,
};

const UserContext = createContext<IProps>(initialState);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  if (!context) {
    throw new Error("Warning: Context is being used outside of a provider.");
  }

  const login = (login: ILogin) => {
    setLoading(true);

    postLogin(login)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setAccessToken(res.data.accessToken);
          setAuthenticated(true);
        } else {
          setUser(null);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const register = (register: IRegister) => {
    setLoading(true);

    postRegister(register)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setAccessToken(res.data.accessToken);
          setAuthenticated(true);
        } else {
          setUser(null);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    setUser(null);
    setAccessToken("");
    setAuthenticated(false);
    setLoading(false);
  };

  return {
    ...context,
    isLoading,
    error,
    isAuthenticated,
    accessToken,
    login,
    register,
    logout,
  };
};

export { UserContext, UserProvider, useUser };
