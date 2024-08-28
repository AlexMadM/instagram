'use client';
import './styles/index.scss'
import { TheHeader } from "@/components/TheHeader";
import s from './global.module.scss'
import "./globals.css";
import {SideBar} from "@/components/sideBar/SideBar";

import Providers from "@/app/store/provider";
import RequireAuth from "@/components/require-auth";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {


  return (
    <html lang="en">
      <body><Providers >
        <TheHeader />

        <div className={s.side}><SideBar/></div>

             <main className={s.main}>{children}</main>
      </Providers>   </body>
    </html>
  );
}


