import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});