import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
   <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
        <p className={`${styles.sectionSubText} text-center`}>Let's talk Technology.</p>
      </motion.div>

     <div className='flex flex-row flex-wrap justify-center gap-10 mt-7'>
      {technologies.map((technology,index) => (
       <motion.div
       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
       className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'
     >  
        <div className='w-28 h-28 bg-tertiary  p-[1px] rounded-[20px] shadow-card' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img
          src={technology.icon}
          alt='web-development'
          className='object-contain mx-auto'
        />
        </div>
        </motion.div>  
      ))}
    </div>
   </> 
   
  );
};

export default SectionWrapper(Tech, "");
