import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../common/student';

@Component({
  selector: 'app-student',
  template: '<p>{{student.name}} lives in {{student.city}}</p>',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
