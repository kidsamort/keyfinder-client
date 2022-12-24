import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

    const empty = screen.getByTestId('Home');

    expect(empty).toBeInTheDocument();
  });
});