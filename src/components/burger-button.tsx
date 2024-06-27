"use client";
import { motion } from "framer-motion";

export default function BurgerButton() {
  return (
    <div className="relative group w-10 h-10 cursor-pointer">
      <span className="block h-0.5 w-6 bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2  group-hover:-translate-y-1 transition-all"></span>
      <span className="block h-0.5 w-6 bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 "></span>
      <span className="block h-0.5 w-6 bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-1 transition-all"></span>
    </div>
  );
}
