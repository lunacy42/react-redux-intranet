import Login from '.';
import { renderWithProviders } from '../../common/testing/test-utils';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// setup handler for mock
export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        username: 'admin'
      })
    );
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

it('should show title and input fields on first start', async () => {
  renderWithProviders(<Login />);

  expect(await screen.findByText(/Login/i)).toBeInTheDocument();
  expect(await screen.findByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(await screen.findByPlaceholderText(/Password/i)).toBeInTheDocument();
});

it('should login', async () => {
  renderWithProviders(<Login />);

  const emailInput: HTMLInputElement = screen.getByPlaceholderText(/Email/i);
  fireEvent.change(emailInput, { target: { value: 'test@test.de' } });

  const passwordInput: HTMLInputElement = screen.getByPlaceholderText(/Password/i);
  fireEvent.change(passwordInput, { target: { value: 'test' } });

  act(() => {
    fireEvent.click(screen.getByTestId('login-submit'));
  });
  expect(await screen.queryByText(/reer/i)).not.toBeInTheDocument();
  await waitFor(() => expect(window.sessionStorage.getItem('is-authenticated')).toBeTruthy());
});
