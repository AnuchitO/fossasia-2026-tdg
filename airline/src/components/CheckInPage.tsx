import { useState } from 'react'
import Header from './Header'
import HeroBanner from './HeroBanner'
import FlightStatus from './FlightStatus'
import BottomNav from './BottomNav'
import SelectPassengers from './SelectPassengers'
import type { Booking } from '../service/bookingService'

export default function CheckInPage() {
  const [booking, setBooking] = useState<Booking | null>(null)

  if (booking) {
    return (
      <SelectPassengers
        booking={booking}
        onBack={() => setBooking(null)}
        onContinue={() => { }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <HeroBanner />
      {/* Booking Form */}
      <FlightStatus />
      <BottomNav />
    </div>
  )
}
