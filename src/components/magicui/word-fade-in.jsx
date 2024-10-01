"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Tag } from "lucide-react";

export default function WordFadeIn({
  words,
  delay = 0.15,

  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },

  className,
  tag='h1'  // default to h1, but allow dynamic tag
}) {
  const _words = words.split(" ");
  const CustomTag=motion[tag];  // This creates a motion version of the dynamic tag

  return (
    (<CustomTag
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        // "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className,
        Tag
      )}>
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </CustomTag>)
  );
}
