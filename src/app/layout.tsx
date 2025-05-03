import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { TopNav } from "~/app/_components/topnav";

import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "~/app/api/uploadthing/core";

export const metadata: Metadata = {
  title: "Create T3 Gallery",
  description: "Generated for Next.js exercise",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal}:
  {children: React.ReactNode, modal: React.ReactNode})
{
  return (
    <ClerkProvider>
      <html lang="en" className={'flex flex-col gap-4'}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body>
          <TopNav />
          {children}
          {modal}
          <div id="modal-root"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
