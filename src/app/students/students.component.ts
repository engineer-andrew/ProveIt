import { Component, OnInit } from '@angular/core';
import { Student } from '../common/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
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
  selectedStudent: Student;
  constructor() { }

  ngOnInit() {
  }

  show(student) {
    console.log(student);
    this.selectedStudent = student;
  }

}
