import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Student } from '../common/student';
import { StudentService } from '../common/student.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  @Input() student: Student;

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.switchMap((params: Params) => {
      const internalStudent = this.studentService.students.find((student) => {
        return student.id === +params['id'];
      });
      return Observable.of(internalStudent);
    }).subscribe(student => this.student = student);
  }

}
