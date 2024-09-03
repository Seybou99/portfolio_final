"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    {
        name: "ACCUEIL",
        path: "/",
    },
    {
        name: "COMPETENCES",
        path: "/services",
    },
    {
        name: "À  PROPOS",
        path: "/resume",
    },
    {
        name: "PROJETS",
        path: "/work",
    },
    // {
    //     name: "CONTACT",
    //     path: "/contact",
    // },
]
const Nav = () => {
  const pathname = usePathname();
  return <nav className="flex  gap-8">
    {links.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
    })}
  </nav>;
};
export default Nav;