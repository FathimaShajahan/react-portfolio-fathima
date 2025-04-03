import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaJs, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0, opacity: 0.8 },
  animate: {
    y: [0, -15, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <FaPython className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <SiDjango className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <FaDatabase className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <SiFlask className="text-7xl text-black-400" />
        </motion.div>
        <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-6">
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
