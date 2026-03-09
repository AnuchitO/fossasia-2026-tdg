import { render, screen } from '@testing-library/react'
import FlightStatus from './FlightStatus'

describe('FlightStatus', () => {
  it('renders Flight Status heading', () => {
    render(<FlightStatus />)
    expect(screen.getByText('Flight Status')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<FlightStatus />)
    expect(screen.getByText(/track your flight in real-time/i)).toBeInTheDocument()
  })

  it('renders Check Status link', () => {
    render(<FlightStatus />)
    expect(screen.getByText(/check status/i)).toBeInTheDocument()
  })
})
