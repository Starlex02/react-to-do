import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import TasksContextProvider from "@/context/TasksContext/TasksContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <Sidebar />
          <TasksContextProvider>
            <main className={styles.container}>{children}</main>
          </TasksContextProvider>
        </div>
      </body>
    </html>
  );
}
