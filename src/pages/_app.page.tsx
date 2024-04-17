import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";

import { globalStyles } from "@/styles/globals";
import { queryClient } from "@/lib/react-query";

import "../lib/dayjs";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://github.com/MarlonChi/schedule-react",
            siteName: "Ignite Call",
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
