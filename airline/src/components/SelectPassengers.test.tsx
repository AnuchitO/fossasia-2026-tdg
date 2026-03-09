import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectPassengers from './SelectPassengers'
import type { Booking } from '../service/bookingService'

const mockBooking: Booking = {
  pnr: 'ABC123',
  passengers: [
    { id: '1', name: 'ALEX HUUM', type: 'ADT', seat: '12A' },
    { id: '2', name: 'Somsee Kuum', type: 'ADT', seat: '12B' },
  ],
}

describe('SelectPassengers', () => {
  const mockOnBack = vi.fn()
  const mockOnContinue = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders step header', () => {
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )
    expect(screen.getByText('Check-in')).toBeInTheDocument()
    expect(screen.getAllByText('Select Passengers')).toHaveLength(2)
    expect(screen.getByText('Step 2 of 5')).toBeInTheDocument()
  })

  it('renders all passengers', () => {
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )
    expect(screen.getByText('ALEX HUUM')).toBeInTheDocument()
    expect(screen.getByText('Somsee Kuum')).toBeInTheDocument()
  })

  it('renders passenger type and seat', () => {
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )
    expect(screen.getAllByText('ADT')).toHaveLength(2)
    expect(screen.getByText('Seat 12A')).toBeInTheDocument()
    expect(screen.getByText('Seat 12B')).toBeInTheDocument()
  })

  it('toggles passenger selection on click', async () => {
    const user = userEvent.setup()
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )

    const alexCard = screen.getByText('ALEX HUUM').closest('button')!
    await user.click(alexCard)
    await user.click(alexCard)
    expect(
      screen.getByRole('button', { name: /continue/i }),
    ).toBeDisabled()
  })

  it('selects all passengers with Select All', async () => {
    const user = userEvent.setup()
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )

    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(
      screen.getByRole('button', { name: /continue/i }),
    ).toBeEnabled()
  })

  it('shows Clear All when all are selected', async () => {
    const user = userEvent.setup()
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )

    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(
      screen.getByRole('button', { name: /clear all/i }),
    ).toBeInTheDocument()
  })

  it('clears all passengers with Clear All', async () => {
    const user = userEvent.setup()
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )

    await user.click(screen.getByRole('button', { name: /select all/i }))
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(
      screen.getByRole('button', { name: /continue/i }),
    ).toBeDisabled()
  })

  it('disables Continue when no passengers selected', () => {
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )
    expect(
      screen.getByRole('button', { name: /continue/i }),
    ).toBeDisabled()
  })

  it('calls onBack when Back is clicked', async () => {
    const user = userEvent.setup()
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )

    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(mockOnBack).toHaveBeenCalled()
  })

  it('calls onContinue with selected passengers when Continue is clicked', async () => {
    const user = userEvent.setup()
    render(
      <SelectPassengers
        booking={mockBooking}
        onBack={mockOnBack}
        onContinue={mockOnContinue}
      />,
    )

    await user.click(screen.getByText('ALEX HUUM').closest('button')!)
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(mockOnContinue).toHaveBeenCalledWith(['1'])
  })
})
