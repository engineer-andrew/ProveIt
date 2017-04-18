import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: 'students', component: StudentsComponent },
    { path: 'student/:id', component: StudentComponent },
    { path: '**', component: PageNotFoundComponent }
];
