import { render, screen } from '@testing-library/react'
import BottomNav from './BottomNav'

describe('BottomNav', () => {
  it('renders Home tab', () => {
    render(<BottomNav />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders Flights tab', () => {
    render(<BottomNav />)
    expect(screen.getByText('Flights')).toBeInTheDocument()
  })

  it('renders Check-in tab', () => {
    render(<BottomNav />)
    expect(screen.getByText('Check-in')).toBeInTheDocument()
  })

  it('renders Manage Booking tab', () => {
    render(<BottomNav />)
    expect(screen.getByText('Manage Booking')).toBeInTheDocument()
  })

  it('renders Contact tab', () => {
    render(<BottomNav />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
