import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);

    const empty = screen.getByTestId('TemplateName');

    expect(empty).toBeInTheDocument();
  });
});