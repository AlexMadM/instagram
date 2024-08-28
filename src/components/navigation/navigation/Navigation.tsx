"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/assets/Home";
import Search from "@/assets/Search";
import MessageCircle from "@/assets/MessageCircle";
import PlusSquare from "@/assets/PlusSquare";
import  s from './navigation.module.scss'
import Person from "@/assets/Person";
import {clsx} from "clsx";
import {useRouter} from "next/navigation";
import {useLoginMutation, useLogoutMutation, useMeQuery} from "@/app/services/inctagram.service";
import {Storage} from "@/utils/storage";
import {useEffect, useState} from "react";
const navItems = [
  { name: "Home", href: "/dashboard/home", icon:Home},

  {
    name: "Create",
    href: "/dashboard/create",
    icon: PlusSquare,
  },
  {
    name: "My Profile",
    href: "/dashboard/profile",
    icon: Person,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: Search,
    hideOnMobile: true,
  },



];

const Navigation = () => {
  const pathname = usePathname();

  const [logout, { isSuccess }] = useLogoutMutation();
  const router = useRouter()
  const handleLogout = () => {
    logout()
        .unwrap()
        .then(() => {
          Storage.deleteToken();
          router.replace('/api/login');

        });

  };
  return (
      <div className={s.container}>
        {navItems.map((link) => {
          const isActive = pathname === link.href;
          const LinkIcon = link.icon;

          return (

              <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(isActive ? "active" : "", s.nav, s.items)}
              >
                <LinkIcon className={s.icon}/>
                {link.name}
              </Link>
          );
        })}
        <button
                className="border rounded-md p-2 leading-4 inline-flex"
                onClick={handleLogout}
            >
              Logout
            </button>


      </div>
  );
};

export {Navigation};
