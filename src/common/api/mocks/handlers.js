import { rest } from 'msw';
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
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '11bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'admin',
          email: 'admin@pear.de',
          firstName: 'Philipp',
          lastName: 'Kropp',
          department: 'IT',
          team: 'sys-admin',
          jobTitle: 'System Administrator',
          img: 'staffm1.jpg'
        },
        {
          id: '21bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'caro',
          email: 'carolin.ivens@pear.de',
          firstName: 'Carolin',
          lastName: 'Ivens',
          department: 'IT',
          team: 'development',
          jobTitle: 'Frontend Developerin React',
          img: 'stafff4.jpg'
        },
        {
          id: '31bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'bini',
          email: 'sabine.suck@pear.de',
          firstName: 'Sabine',
          lastName: 'Suck',
          department: 'IT',
          team: 'development',
          jobTitle: 'Backend Developerin',
          img: 'stafff3.jpg'
        },
        {
          id: '41bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'hannah',
          email: 'hannah@pear.de',
          firstName: 'Hannah',
          lastName: '',
          department: 'IT',
          team: 'development',
          jobTitle: 'Feelgood Managerin',
          img: 'staffdf.jpg'
        },
        {
          id: '51bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'steve',
          email: 'steve.jobs@pear.de',
          firstName: 'Steve',
          lastName: 'Jobs',
          department: 'IT',
          team: 'development',
          jobTitle: 'Backend Developer',
          img: 'staffm2.jpg'
        },
        {
          id: '61bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'ben',
          email: 'benjamin.betel@pear.de',
          firstName: 'Benjamin',
          lastName: 'Betel',
          department: 'Marketing',
          team: 'digital',
          img: 'staffm1.jpg'
        },
        {
          id: '71bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'sophie',
          email: 'sophie.steub@pear.de',
          firstName: 'Sophie',
          lastName: 'Steub',
          department: 'Marketing',
          team: 'print',
          img: 'stafff2.jpg'
        },
        {
          id: '81bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'kathi',
          email: 'katharina.schulz@pear.de',
          firstName: 'Katharina',
          lastName: 'Schulz',
          department: 'Personalmanagement',
          team: 'recruitment',
          img: 'stafff1.jpg'
        }
      ])
    );
  })
];
