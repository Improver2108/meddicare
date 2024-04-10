"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type PointsProps = {
  children: ReactNode;
};

const Point = ({ children }: PointsProps) => {
  return (
    <motion.li
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      {children}
    </motion.li>
  );
};

export default Point;
