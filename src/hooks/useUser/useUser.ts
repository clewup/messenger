import { useContext, useEffect, useState } from "react";
import { userMockData } from "@/hooks/useUser/data/mockData";
import { UserContext } from "@/contexts/User/User";
import { IUser } from "@/types/user";

interface IUseUser {
  user: IUser | undefined;
}

const useUser = (): IUseUser => {
  const { user, setUser } = useContext(UserContext);

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  // Temporary implementation
  useEffect(() => {
    setUser(userMockData);
  }, [setUser]);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    }
  }, []);

  return { user };
};
export default useUser;
