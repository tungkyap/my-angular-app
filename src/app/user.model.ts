export interface User {
  id?: number; // Optional because it may not be provided when creating a new user
  username: string;
  email: string;
  password: string;
  created_at?: Date; // Optional for similar reasons as above
}
