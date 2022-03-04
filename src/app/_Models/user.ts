import { Role } from './role';
export class User{
  id!: string;
  email!: string;
  password!: string;
  role!: Role;
  firstname!: string;
  lastname!: string;
  birthday!: string;
  phone!: string;
  tjm!: number;
  title!: string;
  description!: string;
  language!: string;
  profilePict!: string;
  cv_file!: string;
  deleted!: boolean;
  deletedAt!: Date;
}
