import { rest } from 'msw';
import { announcements, events, users } from './DATA';
export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        id: '11bf5b37-e1b8-42e0-8dcf-dc8c4aefc000'
      })
    );
  }),
  rest.get('/api/users', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      );
    }

    // If authenticated, return mocked users
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.post('/api/update-user', async (req, res, ctx) => {
    const user = await req.json();
    return res(ctx.status(200), ctx.json(user));
  }),
  rest.get('/api/announcements', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      );
    }

    // If authenticated, return mocked users
    return res(ctx.status(200), ctx.json(announcements));
  }),
  rest.get('/api/events', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      );
    }

    // If authenticated, return mocked users
    return res(ctx.status(200), ctx.json(events));
  })
];
