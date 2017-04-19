import { Component, OnInit } from '@angular/core';
import { Student } from '../common/student';
import { StudentService } from '../common/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  selectedStudent: Student;
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.students;
  }

  show(student) {
    console.log(student);
    this.selectedStudent = student;
  }

}
