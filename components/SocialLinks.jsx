"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Instagram, Facebook, MessageCircle } from "lucide-react"

const SocialLinks = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "from-blue-600 to-blue-700" },
    { icon: Github, label: "GitHub", href: "https://github.com", color: "from-slate-700 to-slate-900" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "from-pink-500 to-purple-600" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "from-blue-500 to-blue-700" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/15551234567", color: "from-green-500 to-green-700" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div variants={fadeInUp} className="flex justify-center gap-4">
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-4 flex-wrap justify-center">
        {socials.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.a
              key={index}
              variants={item}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br ${social.color}`}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.a>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default SocialLinks
