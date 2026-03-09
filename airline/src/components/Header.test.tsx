import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders Qoomlee logo text', () => {
    render(<Header />)
    expect(screen.getByText('Qoomlee')).toBeInTheDocument()
  })

  it('renders Airline subtitle', () => {
    render(<Header />)
    expect(screen.getByText('Airline')).toBeInTheDocument()
  })

  it('renders user avatar', () => {
    render(<Header />)
    expect(screen.getByText('P')).toBeInTheDocument()
  })
})
