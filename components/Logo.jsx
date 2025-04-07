import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/public/assets/logo.svg";

const Logo = () => {
  return (
    <Link href="#">
      <Image src={LogoIcon} alt="Urban Build" width={230} height={40} />
    </Link>
  );
};

export default Logo;
