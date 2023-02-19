import { rest } from 'msw';
import { announcements, events, users } from './DATA';
import { v4 as uuidv4 } from 'uuid';
export const handlers = [
  rest.post('/api/login', async (req, res, ctx) => {
    const loginValues = await req.json();
    // Persist user's authentication and role in the session
    sessionStorage.setItem('is-authenticated', 'true');

    let user;
    if (loginValues.email === 'admin@test.de') {
      sessionStorage.setItem('is-admin', 'true');
      user = {
        id: '11bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
        role: 'admin'
      };
    } else {
      user = {
        id: '81bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
        role: 'user'
      };
    }
    console.log('user', user);
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(user)
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(users));
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
    const userWithImage = { ...user, img: '/stafff4.jpg' };
    return res(ctx.delay(800), ctx.status(200), ctx.json(userWithImage));
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
    const userWithIdAndImage = { ...user, id: uuidv4(), img: '/stafff4.jpg' };
    return res(ctx.delay(800), ctx.status(200), ctx.json(userWithIdAndImage));
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(userId));
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(announcements));
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(announcement));
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
    const announcementWithId = { ...announcement, id: uuidv4() };
    return res(ctx.delay(800), ctx.status(200), ctx.json(announcementWithId));
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(announcementId));
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(events));
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
    const eventWithImage = { ...event, img: '/halfmarathon.jpg' };
    return res(ctx.delay(800), ctx.status(200), ctx.json(eventWithImage));
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
    const eventWithIdAndImage = { ...event, id: uuidv4(), img: '/halfmarathon.jpg' };
    return res(ctx.delay(800), ctx.status(200), ctx.json(eventWithIdAndImage));
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
    return res(ctx.delay(800), ctx.status(200), ctx.json(eventId));
  })
];
