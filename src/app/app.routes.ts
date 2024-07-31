import { Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"adduser",
        component: AdduserComponent
    },
    {
        path:"edituser/:id",
        component: EdituserComponent
    },
    {
        path:"viewuser/:id",
        component: ViewuserComponent
    }
];
