"use client";

import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark, FaAngleUp } from "react-icons/fa6";

const navManu = [
  {
    id: 1,
    herf: "/home",
    name: "Home",
  },
  {
    id: 2,
    herf: "/about",
    name: "About Us",
  },
  {
    id: 3,
    herf: "/services",
    name: "Services",
  },

  {
    id: 4,
    herf: "/blog",
    name: "Blog",
  },
  {
    id: 5,
    herf: "/contact",
    name: "Contact",
  },
];
const navManuS = [
  {
    herf: "/blog",
    name: "Blog One",
  },
  {
    herf: "/blog/singleBlog",
    name: "Blog Tow",
  },
];

const NavBar = () => {
  const [dropDoun, setDropDoun] = useState(false);
  const [nav, setNav] = useState(false);

  const pathname = usePathname();
  const pathname2 = usePathname();

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/"><Image src={Logo} alt="Logo" /></Link>
        <div className="hidden gap-6 font-medium md:flex xl:gap-12">
          {navManu.map((value) => {
            const isActive = pathname.startsWith(value.herf);

            if (value.name === "Blog") {
              return (
                <div key={value.name} onMouseEnter={() => setDropDoun(true)} onMouseLeave={() => setDropDoun(false)} className="group flex gap-3" >
                  <Link href={value.herf} className={isActive ? "text-primary" : ""}>{value.name}</Link>
                  <FaAngleUp className={`${isActive ? "text-primary" : ""} duration-300 group-hover:rotate-180`}/>
                  {dropDoun && (
                    <div className="absolute pt-10">
                      <div className="flex w-40 flex-col gap-2 rounded-md border border-primary bg-white p-4 ">
                        {navManuS.map((itams) => {
                          const isActive = pathname2.startsWith(itams.herf);
                          return (
                            <span key={itams.name}>
                              <Link href={itams.herf} className={isActive ? "text-primary" : ""}>{itams.name}</Link>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            
          return ( <Link key={value.id} href={value.herf} className={isActive ? "text-primary" : ""}>{value.name}</Link> );

          })}
        </div>
        <Link href="#" className="hidden rounded-full bg-primary px-7 py-3 text-base font-semibold text-white duration-300 hover:scale-110 md:flex">Get Started</Link>
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          {nav ? ( <FaXmark className="h-7 w-8" /> ) : ( <FaBars className="h-7 w-8" /> )}
        </div>
        {nav && (
          <div className="h-scree absolute left-0 right-0 top-24 text-center backdrop-blur">
            <div className="flex flex-col gap-3 px-6 pt-16 text-xl font-medium">
              {navManu.map((value) => {
                const isActive = pathname.startsWith(value.herf);
                return (
                  <Link href={value.herf} key={value.name} className={isActive ? "text-primary" : ""}>{value.name}</Link>
                );
              })}
              <div className="pt-7">
                <Link href="#" className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white"> Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
