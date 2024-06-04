import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { StepperModule } from 'primeng/stepper';
import { PanVerificationModule } from '../pan-verification/pan-verification.module';
import { EmployeetypeModule } from '../employeetype/employeetype.module';
import { QualifyingFormModule } from '../qualifying-form/qualifying-form.module';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        StepperModule,
        PanVerificationModule,
        EmployeetypeModule,
        QualifyingFormModule,
        ReactiveFormsModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
