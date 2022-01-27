import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
// int function( int a, int b) 
// {
//   int sum = a +b;
//   return sum;
// }


// function add(a: number, b: number): number {
//   return a + b;
// }

// add(12, );
