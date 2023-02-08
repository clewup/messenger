import "@/styles/globals.scss";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { UserProvider } from "@/contexts/User/User";
import { SocketProvider } from "@/contexts/Socket/Socket";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SocketProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SocketProvider>
  );
}
