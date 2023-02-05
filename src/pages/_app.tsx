import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { UserProvider } from "@/contexts/User/User";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
