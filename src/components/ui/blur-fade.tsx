"use client"

import { motion, type MotionProps } from "motion/react"

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.45,
  delay = 0,
  offset = 10,
  direction = "up",
  ...props
}: BlurFadeProps) {
  const axis = direction === "left" || direction === "right" ? "x" : "y"
  const from =
    direction === "right" || direction === "down" ? -offset : offset

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, [axis]: from }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
