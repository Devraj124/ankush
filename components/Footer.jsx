"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.footer variants={fadeInUp} className="text-center py-8 border-t border-slate-200">
      <p className="text-slate-600 text-sm">© 2025 Ankush Bali | Earnify Pvt. Ltd. All rights reserved.</p>
      <p className="text-slate-500 text-xs mt-2">Financial Portfolio Manager | Investment Specialist</p>
    </motion.footer>
  )
}

export default Footer
