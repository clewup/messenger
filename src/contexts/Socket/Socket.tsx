import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";

interface IProps {
  socket: Socket | null;
  setSocket: React.Dispatch<SetStateAction<Socket | null>>;
}

const initialState: IProps = {
  socket: null,
  setSocket: (() => undefined) as React.Dispatch<any>,
};

const SocketContext = createContext<IProps>(initialState);

const SocketProvider = ({ children }: any) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  const context = useContext(SocketContext);
  const { socket, setSocket } = context;

  if (!context) {
    throw new Error("Warning: Context is being used outside of a provider.");
  }

  useEffect(() => {
    fetch("/api/socket").finally(() => {
      const socketio = io();
      socketio.on("connect", () => {
        console.log("Socket Client Initialized");
      });
      socketio.on("disconnect", () => {
        console.log("Socket Disconnected");
      });
      setSocket(socketio);
    });
    function cleanup() {
      socket?.disconnect();
    }
    return cleanup();
  }, []);

  return context;
};

export { SocketContext, SocketProvider, useSocket };
