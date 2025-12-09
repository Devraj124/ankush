"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const PortfolioSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const canvasRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("09:30 AM")

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          const QRCode = (await import("qrcode")).default
          await QRCode.toCanvas(canvasRef.current, "https://fundzbazar.com/Link/apN6GNFhvbA", {
            width: 150,
            margin: 2,
            color: {
              dark: "#0f172a",
              light: "#ffffff",
            },
          })
        } catch (err) {
          console.log("[v0] QR code generation not available")
        }
      }
    }
    generateQR()
  }, [])

  const timeSlots = ["09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM"]

  const handleAddToContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ankush Bali
TEL:+917303055999
EMAIL:EARNIFY.PVT@GMAIL.COM
TITLE:Financial Portfolio Manager
ORG:Earnify Pvt. Ltd.
ADR:;;1st floor 110, B-wing, NAVKAR CHAMBERS MAROL;Marol Naka;Mumbai;;India
URL:https://earnifypvtltd.com
END:VCARD`

    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(vcard))
    element.setAttribute("download", "Ankush-Bali-Earnify.vcf")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <motion.div variants={fadeInUp} className="space-y-8">
      {/* Investment Platform Section */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl p-8 border border-teal-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">India's Leading Investment Platform</h3>
        <p className="text-slate-600 text-center mb-6 text-sm">Open your account and start investing with Earnify</p>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <canvas ref={canvasRef} width={150} height={150} className="mx-auto" />
          </div>
          <a
            href="https://fundzbazar.com/Link/apN6GNFhvbA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Open Account
          </a>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center uppercase">Make an Appointment</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 font-semibold mb-2">Pick a Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-2">Select Time</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors mt-4">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Add to Contact Section */}
      {/* <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-300 text-center">
        <div className="flex justify-center mb-4">
          <Users className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Add to Contact</h3>
        <p className="text-slate-600 mb-6 text-sm">Save Ankush Bali's contact details</p>
        <button
          onClick={handleAddToContact}
          className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Save Contact
        </button>
      </div> */}
    </motion.div>
  )
}

export default PortfolioSection
