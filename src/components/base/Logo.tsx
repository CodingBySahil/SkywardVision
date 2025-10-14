import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} className="w-[250px] h-auto">
      <img
        src="/assets/main-logo.png"
        alt="SkywardVision Logo"
        className="object-contain h-auto w-auto"
      />
    </Link>
  );
}

export default Logo;
