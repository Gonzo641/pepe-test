"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center items-center">
    <motion.div
      className="bg-gray-400 my-20 h-1 w-52 rounded-full  "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
    </div>
  );
}