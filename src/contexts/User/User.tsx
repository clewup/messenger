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
  user: IUser | undefined;
  setUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const initialState: IProps = {
  user: undefined,
  setUser: (() => undefined) as React.Dispatch<any>,
};

const UserContext = createContext<IProps>(initialState);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>();

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

  useEffect(() => {
    if (!user && !accessToken && !isAuthenticated) {
      router.push("/login");
    }
  }, [accessToken]);

  // Temporary Implementation
  useEffect(() => {
    setUser(userListMockData[0]);
  }, [setUser]);

  const login = (login: ILogin) => {
    setLoading(true);

    postLogin(login)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setAccessToken(res.data.accessToken);
          setAuthenticated(true);
        } else {
          setUser(undefined);
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
          setUser(undefined);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    setUser(undefined);
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
