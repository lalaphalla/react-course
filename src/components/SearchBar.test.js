import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar';
import React from 'react';
// import '@testing-library/jest-dom'; 
describe('Search Component', () => {
  test('render something', () => {
    render(<SearchBar />)

    const confirmElement = screen.getByText('SearchBar');
    expect(confirmElement).toBeInTheDocument();
  })

  test('renders good to see you if the button was not clicked', () => {
    render(<SearchBar />)
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();

  })
  test('renders Change', async () => {
    render(<SearchBar />)

    const buttonElement = screen.getByText('Click');
    React.act(() => {
      userEvent.click(buttonElement)
    });
    // buttonElement.click()
    const outputElement = screen.getByText('Nice to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();

  })
})
