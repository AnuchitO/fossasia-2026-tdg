import { render, screen } from '@testing-library/react'
import CheckInPage from './CheckInPage'

describe('CheckInPage', () => {
  it('renders the full check-in page with all sections', () => {
    render(<CheckInPage />)

    // Header
    expect(screen.getByText('Qoomlee')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /online check-in/i })).toBeInTheDocument()

    // Booking form
    expect(screen.getByText('Retrieve Your Booking')).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/booking reference/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeInTheDocument()

    // Flight status
    expect(screen.getByText('Flight Status')).toBeInTheDocument()

    // Bottom nav
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Check-in')).toBeInTheDocument()
  })
})
