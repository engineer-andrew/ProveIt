import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {
  students: Student[] = [
    {
      id: 1,
      name: 'Mickey Mouse',
      teacherId: 1000,
      age: 13,
      city: 'Anaheim'
    },
    {
      id: 2,
      name: 'Minnie Mouse',
      teacherId: 1000,
      age: 13,
      city: 'Anaheim'
    },
    {
      id: 3,
      name: 'Donald Duck',
      teacherId: 1001,
      age: 14,
      city: 'Los Angeles'
    },
    {
      id: 4,
      name: 'Daisy Duck',
      teacherId: 1001,
      age: 14,
      city: 'Los Angeles'
    },
    {
      id: 5,
      name: 'Scrooge McDuck',
      teacherId: 1002,
      age: 16,
      city: 'Glendale'
    }
  ];

  constructor() { }

}
