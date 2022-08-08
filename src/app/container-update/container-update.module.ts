import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ContainerListComponent } from './pages/container-list/container-list.component';
import { RequestMoveComponent } from './pages/request-move/request-move.component';
import { PaymentProcessComponent } from './pages/payment-process/payment-process.component';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    LoginComponent,
    ContainerListComponent,
    RequestMoveComponent,
    PaymentProcessComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ContainerUpdateModule { }
