import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Socket } from "socket.io-client";

interface IProps {
  socket: Socket | undefined;
  setSocket: React.Dispatch<SetStateAction<Socket | undefined>>;
}

const initialState: IProps = {
  socket: undefined,
  setSocket: (() => undefined) as React.Dispatch<any>,
};

const SocketContext = createContext<IProps>(initialState);

const SocketProvider = ({ children }: any) => {
  const [socket, setSocket] = useState<Socket>();

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("Warning: Context is being used outside of a provider.");
  }

  return context;
};

export { SocketContext, SocketProvider, useSocket };
