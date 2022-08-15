import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerListComponent } from './container-update/pages/container-list/container-list.component';
import { LoginComponent } from './container-update/pages/login/login.component';
import { PaymentProcessComponent } from './container-update/pages/payment-process/payment-process.component';
import { RequestMoveComponent } from './container-update/pages/request-move/request-move.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'container-list',
        component: ContainerListComponent
    },
    {
        path: 'request-move',
        component: RequestMoveComponent
    },
    {
        path: 'payment-process',
        component: PaymentProcessComponent
    }
];

export const Routing = RouterModule.forRoot(routes);