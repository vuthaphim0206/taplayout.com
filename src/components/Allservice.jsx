"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { AiFillCar } from "react-icons/ai";

const links = [
  {
    id: 1,
    icon: <AiFillCar />,
    title: "Private taxi",
    url: "/",
  },
  {
    id: 2,
    icon: <AiFillCar />,
    title: "Share taxi",
    url: "/share",
  },
  {
    id: 3,
    icon: <AiFillCar />,
    title: "Express",
    url: "/express",
  },
  {
    id: 4,
    icon: <AiFillCar />,
    title: "Cargo",
    url: "/cargo",
  },
  {
    id: 5,
    icon: <AiFillCar />,
    title: "Services",
    url: "/other-services",
  },
];

const Allservices = () => {
  const router = useRouter();

  const activeClass =
    router.pathname === links.url ? "text-white" : "text-red-700";

  return (
    <div className=" m-auto flex gap-10 text-2xl mt-7 mb-7">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={`flex justify-center items-center gap-3 ${activeClass}`}
        >
          <AiFillCar />
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Allservices;
