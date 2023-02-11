export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department: string;
  team: string;
  img: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
