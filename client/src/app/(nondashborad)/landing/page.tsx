"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCarousel } from "@/hooks/useCarousel";

const Landing = () => {

  const currentImage  =useCarousel({totalImages:3})
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-start min-h-screen"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-20 flex flex-col-reverse  md:flex-row items-center bg-[#373837] text-gray-100 max-w-5xl w-full rounded-lg md:h-124 shadow-lg overflow-hidden">
          {/* Left Section - Text */}
          <div className="md:w-[50%] flex flex-col justify-start space-y-10 px-10 py-24">
            <h1 className="text-4xl font-extrabold">Courses</h1>
            <p className="text-lg">
              This is the list of courses you can enroll in. Get courses when you
              need them and want them.
            </p>
            <Button className="w-fit mt-10 ml-0 px-12 py-8 text-lg bg-[#725deccb] rounded-sm">
              <Link href="" className="">
                Search for courses
              </Link>
            </Button>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-[50%] h-full">
            
           
                <img
                src={images[currentImage]}
                alt="Courses"
                className="md:h-124 w-full object-cover"
              />
              
            
            
          </div>
        </div>
      </motion.div>

      <motion.div
       initial ={{ y: 20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5 }}
       viewport={{ amount:0.3,  once:true}}
       className=""
      >
        <h2 className="">
          Featured Courses

        </h2>
        <p className="">
From beginner to advanced, in all indeustries, we have right course  just for you and preparing your entire journey for learning and making the most.
        </p>
        <div className="">
          {["web development","enterprise", "reac nextjs","web development","enterprise IT"]}

        </div>

      </motion.div>
    </motion.div>
  );
};

export default Landing;