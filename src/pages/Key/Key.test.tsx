import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Key from './Key';

describe('<Key />', () => {
  test('it should mount', () => {
    render(<Key />);

    const empty = screen.getByTestId('Key');

    expect(empty).toBeInTheDocument();
  });
});