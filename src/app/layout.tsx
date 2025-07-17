import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "The Wedding Coordinator",
  description: "Outchea trying to land the next job, lets have fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="w-screen h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
