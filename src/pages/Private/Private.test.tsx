import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Private from './Private';

describe('<Private />', () => {
  test('it should mount', () => {
    render(<Private />);

    const empty = screen.getByTestId('Private');

    expect(empty).toBeInTheDocument();
  });
});