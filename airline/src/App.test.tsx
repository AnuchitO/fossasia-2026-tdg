import { render, screen } from '@testing-library/react'

test('example vitest', () => {
  render(<div><button>Click me</button></div>)

  expect(screen.getByText('Click me')).toBeInTheDocument()
})
