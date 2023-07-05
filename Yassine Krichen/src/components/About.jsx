import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-18 h-18 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} style={{ textAlign: "center" }}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText} style={{ textAlign: "center" }}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px] text-center"
      >
        Passionate and versatile web developer adept at building dynamic and
        interactive applications. I bring expertise in full-stack development,
        demonstrated through the successful creation of a robust resource and
        employee management application during an internship. Proficient in
        React, I harness the power of its ecosystem, leveraging various packages
        and libraries to craft engaging user experiences. Additionally, I've
        ventured into game development with Unity, delivering captivating
        projects that showcase my creativity and technical skills. With a solid
        foundation in C and Python, I've developed programs ranging from
        password generators to downloaders and converters. Continuously seeking
        new challenges to expand my skillset and create impactful digital
        solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
