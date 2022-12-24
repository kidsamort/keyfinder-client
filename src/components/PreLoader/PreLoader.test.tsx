import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PreLoader from './PreLoader';

describe('<PreLoader />', () => {
  test('it should mount', () => {
    render(<PreLoader />);

    const empty = screen.getByTestId('PreLoader');

    expect(empty).toBeInTheDocument();
  });
});