import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { TopNav } from "~/app/_components/topnav";

import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";
import { PostHogProvider } from "./_analytics/provider";


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
      <PostHogProvider>
        <html lang="en" className={''}>
          <NextSSRPlugin
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <body className="dark">
            <div className="h-screen grid grid-rows-[auto, 1fr]">
              <TopNav />
              <main className="overflow-y-scroll">
                {children}
              </main>
            </div>
            {modal}
            <div id="modal-root"/>
            <Toaster />
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  );
}
