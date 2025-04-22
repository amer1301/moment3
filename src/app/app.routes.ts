import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvertComponent } from './convert/convert.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'convert', component: ConvertComponent },
    { path: 'assignment', component: AssignmentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
];
