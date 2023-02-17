import { rest } from 'msw';
import { announcements, events, users } from './DATA';
export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    // Persist user's authentication and role in the session
    sessionStorage.setItem('is-authenticated', 'true');
    sessionStorage.setItem('is-admin', 'true');
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        id: '11bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
        role: 'admin'
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
    const user = await req.json();
    return res(ctx.status(200), ctx.json(user));
  }),
  rest.post('/api/create-user', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated, return mocked users
    const user = await req.json();
    return res(ctx.status(200), ctx.json(user));
  }),
  rest.post('/api/delete-user', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated, return mocked users
    const userId = await req.json();
    return res(ctx.status(200), ctx.json(userId));
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
  rest.post('/api/update-announcement', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated, return mocked users
    const announcement = await req.json();
    return res(ctx.status(200), ctx.json(announcement));
  }),
  rest.post('/api/create-announcement', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated, return mocked users
    const announcement = await req.json();
    return res(ctx.status(200), ctx.json(announcement));
  }),
  rest.post('/api/delete-announcement', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated, return mocked users
    const announcementId = await req.json();
    return res(ctx.status(200), ctx.json(announcementId));
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

    // If authenticated, return mocked events
    return res(ctx.status(200), ctx.json(events));
  }),
  rest.post('/api/update-event', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated and admin rights are provided, return mocked event
    const event = await req.json();
    return res(ctx.status(200), ctx.json(event));
  }),
  rest.post('/api/create-event', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated and admin rights are provided, return mocked event
    const event = await req.json();
    return res(ctx.status(200), ctx.json(event));
  }),
  rest.post('/api/delete-event', async (req, res, ctx) => {
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

    // Check if the user has admin rights
    const isAdmin = sessionStorage.getItem('is-admin');
    if (!isAdmin) {
      // If not admin, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'No admin rights'
        })
      );
    }

    // If authenticated and admin rights are provided, return mocked event
    const eventId = await req.json();
    return res(ctx.status(200), ctx.json(eventId));
  })
];
