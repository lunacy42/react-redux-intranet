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
  created: string;
}

export interface Filters {
  department: string | null;
  name: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
export interface Announcement {
  id: string;
  title: string;
  text: string;
  created: string;
}

export interface CompanyEvent {
  id: string;
  title: string;
  text: string;
  date: string;
  img: string;
  created: string;
}
