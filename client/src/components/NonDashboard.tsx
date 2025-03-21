import Link from "next/link";
import React from "react";
import {Bell, BookOpen} from "lucide-react";
const NonDashboardNavbar = () => {
  return <nav className=" flex  justify-between items-center mx-24 md:mx-48 mt-8">
          <div >
            <div className="flex items-center  text-2xl gap-16">
                <Link className="font-semibold" id="searchLink" href="/">
                FIRA
                </Link>
                <div className="">
                  <div className=" bg-[#3b4446aa] py-2 w-[36vh]  md:w-[64vh] pl-3 rounded">
                    <Link href="/search" className="flex text-[#ffffffae] hover:text-white transition-all delay-100 text-[13px] gap-2 items-center ">
                    <BookOpen className="w-4"/>
                    <span className="hidden sm:inline ">Search Courses</span>
                    <span className="sm:hidden">Search</span>
                    </Link>
                    

                  </div>

                </div>
            </div>
          </div>
  <div className="">
    <button>
      <span className="">        
      </span>
      <Bell className=""/>
    </button>
  </div>
  </nav>;
};

export default NonDashboardNavbar;
