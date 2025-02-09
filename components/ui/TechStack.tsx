/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";
import { Button } from "./MovingBorder";
const TechStack = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="w-full mt-10 mb-10 items-center justify-center max-lg:mt-5 border border-red  rounded-lg ">
        <motion.div className="flex flex-wrap gap-5 mt-0 justify-center items-center mx-auto ">
          {skills.map((el: any) => (
            <motion.div
              key={el.name}
              initial="hidden"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 0 },
              }}
              className="hover:scale-125 mt-2 mb-2 cursor-pointer md:basis-1/5 sm:basis-1/2 max-md:basis-1/3 lg:w-[55%] md:w-[45%]"
            >
              <Button
                key={el.name}
                className="w-full py-2 px-4 flex rounded-lg justify-center items-center"
                duration={Math.floor(Math.random() * 10000) + 10000}
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-base sm:text-md ml-3 sm:ml-4 text-white-800 ">
                  {el.name}
                </h4>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
