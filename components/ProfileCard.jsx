"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const ProfileCard = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div variants={fadeInUp} className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block mb-6"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-teal-500 to-slate-700 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src="/ankush.png"
              alt="Ankush Bali"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
        Ankush Bali
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-xl md:text-2xl font-semibold mb-2"
        style={{ color: "var(--color-primary)" }}
      >
        Financial Portfolio Manager
      </motion.p>

      <motion.p variants={fadeInUp} className="text-lg text-slate-700 mb-4 font-medium">
        Director, Earnify Pvt. Ltd.
      </motion.p>

      <motion.p variants={fadeInUp} className="text-base text-slate-600 max-w-md mx-auto">
        Turning confusion about money into confidence about the future through customized portfolio strategies
      </motion.p>
    </motion.div>
  )
}

export default ProfileCard
