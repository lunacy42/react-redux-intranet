import { renderWithProviders } from '../../common/testing/test-utils';
import { screen } from '@testing-library/react';
import Staff from './Staff';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// setup handler for mock
export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
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
          img: '/staffm1.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
        },
        {
          id: '21bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'karla',
          email: 'karla.egon@pear.de',
          firstName: 'Karla',
          lastName: 'Egon',
          department: 'IT',
          team: 'development',
          jobTitle: 'Frontend Developerin React',
          img: '/stafff4.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
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
          img: '/stafff3.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
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
          img: '/staffdf.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
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
          img: '/staffm2.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
        },
        {
          id: '61bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'ben',
          email: 'benjamin.betel@pear.de',
          firstName: 'Benjamin',
          lastName: 'Betel',
          department: 'Marketing',
          team: 'digital',
          jobTitle: 'Backend Developer',
          img: '/staffm1.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
        },
        {
          id: '71bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'sophie',
          email: 'sophie.steub@pear.de',
          firstName: 'Sophie',
          lastName: 'Steub',
          department: 'Marketing',
          team: 'print',
          jobTitle: 'Backend Developer',
          img: '/stafff2.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
        },
        {
          id: '81bf5b37-e1b8-42e0-8dcf-dc8c4aefc000',
          username: 'kathi',
          email: 'katharina.schulz@pear.de',
          firstName: 'Katharina',
          lastName: 'Schulz',
          department: 'Personalmanagement',
          team: 'recruitment',
          jobTitle: 'Personal Recruiting Manager',
          img: '/stafff1.jpg',
          telephone: '+49 179 22 33 445',
          location: 'Hamburg',
          room: '12b',
          availability: 'Monday until Friday 8am - 5pm',
          notice: 'I will not be available this Thursday afternoon.',
          noticeDate: 'Thu Jan 26 2023 11:34:08 GMT+0100'
        }
      ])
    );
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

it('should show title and users on first start', async () => {
  renderWithProviders(<Staff />);

  expect(await screen.findByText(/Staff/i)).toBeInTheDocument();
  expect(await screen.findAllByTestId('users-card')).toHaveLength(8);
});
