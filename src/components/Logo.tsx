import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Logo = ({ classname, props }: any) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300",
          classname
        )}
      >
        Investa
      </h2>
    </Link>
  );
};

export default Logo;
