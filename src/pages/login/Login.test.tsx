import Login from './Login';
import { renderWithProviders } from '../../common/testing/test-utils';
import { fireEvent, screen, within } from '@testing-library/react';

it('should show title and pets on first start', async () => {
  renderWithProviders(<Login />);

  expect(await screen.findByText(/Login/i)).toBeInTheDocument();
});
