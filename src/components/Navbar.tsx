import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navlinks } from "@/constants";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 ">
            <Logo />
          </div>

          <ul className="hidden lg:flex lg:gap-10 items-center">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative hover:bg-gray-100  -mx-3 -py-2 px-3 rounded-lg py-2 text-base text-gray-700 transition-colors"
              >
                <li className="text-slate-700 duration-300">{link.title}</li>
              </Link>
            ))}
          </ul>

          <div className="flex gap-3 items-center">
            <Button
              text="Get Advice"
              bgColor="bg-white"
              textColor="text-slate-900"
            />
            <Button
              text="Hire me"
              bgColor="bg-slate-900"
              textColor="text-white"
            />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
