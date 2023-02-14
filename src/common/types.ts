export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department: string;
  team: string;
  jobTitle: string;
  telephone: string;
  location: string;
  room: string;
  availability: string;
  notice: string;
  noticeDate: string;
  img: string;
  role: string;
}

export interface Filters {
  department: string | null;
  name: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
