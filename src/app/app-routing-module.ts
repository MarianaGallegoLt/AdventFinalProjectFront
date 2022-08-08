import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerListComponent } from './container-update/pages/container-list/container-list.component';
import { LoginComponent } from './container-update/pages/login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'container-list',
        component: ContainerListComponent
    }
];

export const Routing = RouterModule.forRoot(routes);