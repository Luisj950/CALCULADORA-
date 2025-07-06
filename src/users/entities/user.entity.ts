import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Rol } from '../enums/rol.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'usuario' })
  rol: Rol;
}
