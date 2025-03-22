
import Link from "next/link";
import React from "react";

const Footer = () => {
  return <div className=" flex flex-col gap-5 justify-center w-full items-center pb-10 mt-16  ">
    <p>&copy; 2024 FIRA. All Right Reserverd.</p>
        <div className=" flex gap-10">
            {["About","Privcay Policy","Licensing", "Conatact"].map(
                (item,index)=>{
                    return <Link key={index} href={`/${item.toLowerCase().replace(" ","-")}`}>
                    {item}
                    </Link>

                }
            )}
        </div>
  </div>;
};

export default Footer;
