"use client"

import { motion } from "framer-motion"
import ProfileCard from "@/components/ProfileCard"
import ContactDetails from "@/components/ContactDetails"
import SocialLinks from "@/components/SocialLinks"
import ActionButtons from "@/components/ActionButtons"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import PortfolioSection from "@/components/PortfolioSection"
import Footer from "@/components/Footer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-2xl mx-auto px-4 py-8 md:py-12 space-y-8"
      >
        <ProfileCard />
        <ContactDetails />
        <SocialLinks />
        <ActionButtons />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <Footer />
      </motion.div>
    </main>
  )
}
