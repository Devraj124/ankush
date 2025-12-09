"use client"

import { motion } from "framer-motion"

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
      <p className="text-slate-600 leading-relaxed text-base">
        I'm Ankush Bali — helping people turn confusion about money into confidence about their future. Director of
        Earnify Pvt. Ltd., I specialise in building customised portfolios that balance growth + safety through mutual
        funds, life & health insurance, and equity investments. With a deep understanding of financial markets and
        wealth management strategies, I work with individuals and companies to achieve their long-term financial goals.
      </p>
    </motion.div>
  )
}

export default AboutSection
