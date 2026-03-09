import { render, screen } from '@testing-library/react'
import HeroBanner from './HeroBanner'

describe('HeroBanner', () => {
  it('renders Online Check-in heading', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { name: /online check-in/i })).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Fly Smart. Fly Qoomlee.')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/check in online and save time at the airport/i)).toBeInTheDocument()
  })
})
