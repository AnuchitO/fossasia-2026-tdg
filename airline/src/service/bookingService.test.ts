import { retrieveBooking } from './bookingService'

describe('bookingService', () => {
  describe('retrieveBooking', () => {
    it('returns booking with passengers when found', async () => {
      const result = await retrieveBooking('Huum', 'ABC123')

      expect(result).toEqual({
        pnr: 'ABC123',
        passengers: [
          { id: '1', name: 'ALEX HUUM', type: 'ADT', seat: '12A' },
          { id: '2', name: 'Somsee Kuum', type: 'ADT', seat: '12B' },
        ],
      })
    })

    it('throws error when booking is not found', async () => {
      await expect(retrieveBooking('Unknown', 'ZZZ999')).rejects.toThrow(
        'Booking not found',
      )
    })
  })
})
