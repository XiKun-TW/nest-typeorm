import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Role {
  superAdmin,
  admin,
  staff,
  user,
}

export const RoleName = ['superAdmin', 'admin', 'staff', 'user'];

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  role: Role;
}