"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] bg-clip-text text-transparent">
        Gradient Text
      </h1>
      <motion.div
        className="w-20 h-20 bg-red-500 rounded-xl"
        initial={{ x: -100 }}
        animate={{ rotate: 360, x: 100 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
