import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import Navigation from '../../src/components/Navigation/Navigation'

describe('Navigation Component', () => {
  beforeAll(() => {
    render(<Navigation />)
  })

  it('should have the right message in the dom', () => {
    const message = 'Hello World';

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})