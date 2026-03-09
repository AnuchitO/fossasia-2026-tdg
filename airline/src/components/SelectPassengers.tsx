import { useState } from 'react'
import type { Booking } from '../service/bookingService'

interface SelectPassengersProps {
  booking: Booking
  onBack: () => void
  onContinue: (selectedIds: string[]) => void
}

export default function SelectPassengers({
  booking,
  onBack,
  onContinue,
}: SelectPassengersProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const allSelected = selectedIds.length === booking.passengers.length

  const togglePassenger = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  const handleSelectAll = () => {
    setSelectedIds(booking.passengers.map((p) => p.id))
  }

  const handleClearAll = () => {
    setSelectedIds([])
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div>
            <span className="block text-base font-bold text-gray-800">Check-in</span>
            <span className="block text-xs text-gray-400">Select Passengers</span>
          </div>
        </div>
        <span className="text-xs text-gray-400">Step 2 of 5</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-200">
        <div className="h-1 bg-sky-500 w-2/5" />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pt-6 pb-4">
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Select Passengers</h2>
          <p className="text-sm text-gray-400 mb-4">Choose passengers for check-in</p>

          <div className="space-y-3">
            {booking.passengers.map((passenger) => {
              const isSelected = selectedIds.includes(passenger.id)
              return (
                <button
                  key={passenger.id}
                  type="button"
                  onClick={() => togglePassenger(passenger.id)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-colors relative ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <span className="block text-base font-semibold text-gray-800">
                    {passenger.name}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      ADT
                    </span>
                    <span className="text-xs text-gray-400">
                      Seat {passenger.seat}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-8 h-8 bg-sky-500 rounded-bl-xl rounded-tr-[10px] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Select All / Clear All */}
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={allSelected ? handleClearAll : handleSelectAll}
            className="flex items-center gap-1 text-sm text-gray-500"
          >
            {allSelected ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear All
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Select All
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="px-4 py-4 bg-white border-t border-gray-200 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 bg-white"
        >
          Back
        </button>
        <button
          type="button"
          disabled={selectedIds.length === 0}
          onClick={() => onContinue(selectedIds)}
          className={`flex-1 py-3 rounded-xl font-semibold text-white transition-colors ${
            selectedIds.length === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-sky-600 hover:bg-sky-700'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
