"use client";
import { cn } from "@/app/lib/utils";

import { useRouter } from "next/navigation";

import { useScroll, motion, useMotionValueEvent, useAnimate, stagger, delay } from "framer-motion";
import { useState, useEffect } from "react";
import { init } from "next/dist/compiled/webpack/webpack";

type TopicSelectorProps = {
  children: React.ReactNode | React.ReactNode[];
};
function TopicSelector(props: TopicSelectorProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div.topic-single",
      { opacity: [0, 1] },
      {
        delay: stagger(0.05),
        duration: 0.3,
        ease: "circOut",
      }
    );
  }, []);

  return (
    <motion.div
      ref={scope}
      className="overflow-hidden flex "
    >
      {props.children}
    </motion.div>
  );
}

type SingleTopicSelectorProps = {
  children: React.ReactNode;
  active?: boolean;
  value?: string;
};
const SingleTopicSelector = (props: SingleTopicSelectorProps) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  const handleClick = () => {
    router.push(`/?topic=${props.value}`);
  };

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolled(scrollY.get() > 10);
  });

  return (
    <div
      className={cn(
        "topic-single cursor-pointer text-title-m px-2 py-6 relative after:content-[''] after:absolute after:h-1.5 after:w-full after:scale-x-0 after:bg-red-500 after:transition-transform after:bottom-0 after:left-0 after:origin-right capitalize transition-all duration-300 opacity-0 ",
        props.active && "after:scale-x-100 after:origin-left",
        isScrolled && "text-title-s py-2"
      )}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export { TopicSelector, SingleTopicSelector };
