export interface Passenger {
  id: string
  name: string
  type: string
  seat: string
}

export interface Booking {
  pnr: string
  passengers: Passenger[]
}

const mockBookings: Record<string, Booking> = {
  ABC123: {
    pnr: 'ABC123',
    passengers: [
      { id: '1', name: 'ALEX HUUM', type: 'ADT', seat: '12A' },
      { id: '2', name: 'Somsee Kuum', type: 'ADT', seat: '12B' },
    ],
  },
}

export async function retrieveBooking(
  lastName: string,
  pnr: string,
): Promise<Booking> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const booking = mockBookings[pnr]
  if (!booking) {
    throw new Error('Booking not found')
  }

  const hasMatchingPassenger = booking.passengers.some((p) =>
    p.name.toLowerCase().includes(lastName.toLowerCase()),
  )
  if (!hasMatchingPassenger) {
    throw new Error('Booking not found')
  }

  return booking
}
