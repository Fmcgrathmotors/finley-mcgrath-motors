"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function BackgroundWatermark() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0px", "0px"] : ["0px", "600px"]
  );

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: "url('/logo-f-only.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "320px auto",
        backgroundPositionY,
        mixBlendMode: "lighten",
        opacity: 0.05,
      }}
    />
  );
}
