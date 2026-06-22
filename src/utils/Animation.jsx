import { motion } from 'framer-motion'


export const socialContainer = {
    initial:{},
    animate:{
        transition:{
            staggerChildren: 0.03
        }
    }
}

export const socialItem = {
    initial: ({direction = 'y', value = 30} = {}) => ({
        opacity: 0,
        y: direction === 'y' ? value : 0,
        x: direction === 'x' ? value : 0,
    }),
    animate:{
        opacity: 1,
        y: 0,
        x: 0,
        transition:{
            duration: 0.3,
            delay: 1.2,
            ease:'easeIn'
        }
    }
}

export const StaggerText = ({ text, delay = 0, className, margin='0px'}) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay:0.8,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: margin}}
      className="overflow-hidden flex">
      {text.split("").map((char, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span variants={letter} className={`${className} inline-block`}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};