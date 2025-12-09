"use client"

import { motion } from "framer-motion"
import { Download, Share2 } from "lucide-react"

const ActionButtons = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleDownloadContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ankush Bali
TEL:+917303055999
EMAIL:earnify.pvt@gmail.com
ORG:Earnify Pvt. Ltd.
TITLE:Financial Portfolio Manager
URL:https://earnifypvtltd.com
ADR:;;1st Floor 110 B-Wing Navkar Chambers;Marol Naka;Mumbai;;India
END:VCARD`

    const blob = new Blob([vcard], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "ankush-bali-contact.vcf"
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleShareContact = async () => {
    const shareText = "Check out my financial portfolio services: earnifypvtltd.com"

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ankush Bali - Financial Portfolio Manager",
          text: shareText,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Share cancelled")
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDownloadContact}
        className="py-4 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
      >
        <Download className="w-5 h-5" />
        Save Contact
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleShareContact}
        className="py-4 px-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
      >
        <Share2 className="w-5 h-5" />
        Share Contact
      </motion.button>
    </motion.div>
  )
}

export default ActionButtons
