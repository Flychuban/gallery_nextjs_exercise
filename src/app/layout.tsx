import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { TopNav } from "~/app/_components/topnav";

import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Create T3 Gallery",
  description: "Generated for Next.js exercise",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={'flex flex-col gap-4'}>
        <TopNav />
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
