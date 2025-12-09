"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

const ContactDetails = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7303055999",
      href: "tel:+917303055999",
    },
    {
      icon: Mail,
      label: "Email",
      value: "earnify.pvt@gmail.com",
      href: "mailto:earnify.pvt@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Marol Naka, Mumbai",
      href: "#",
    },
    {
      icon: Globe,
      label: "Website",
      value: "earnifypvtltd.com",
      href: "https://earnifypvtltd.com",
    },
  ]

  return (
    <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contacts.map((contact, index) => {
        const Icon = contact.icon
        return (
          <motion.a
            key={index}
            href={contact.href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition-colors">
                <Icon className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500">{contact.label}</p>
                <p className="text-slate-900 font-semibold truncate">{contact.value}</p>
              </div>
            </div>
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export default ContactDetails
