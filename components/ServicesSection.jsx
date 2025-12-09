"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, PieChart, FileText } from "lucide-react"

const ServicesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Diversified portfolio strategies for wealth growth",
    },
    {
      icon: PieChart,
      title: "Equity Investments",
      description: "Shares, Options, Futures & Unlisted Shares",
    },
    {
      icon: Shield,
      title: "General Insurance",
      description: "Health, Car, Travel, Business & Director Liability",
    },
    {
      icon: FileText,
      title: "Life Insurance",
      description: "Retirement, Goals, Tax Planning & Legacy",
    },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl w-fit mb-4">
                <Icon className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default ServicesSection
