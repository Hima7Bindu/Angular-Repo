import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QualifyingFormComponent } from './qualifying-form.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { QualifyingFormRoutingModule } from './qualifying-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { StepsModule } from 'primeng/steps';
import { RadioButtonModule } from 'primeng/radiobutton';



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
        QualifyingFormRoutingModule,
        DropdownModule,
        ReactiveFormsModule,
        MessagesModule,
        RadioButtonModule,
        StepsModule
    ],
    declarations: [QualifyingFormComponent],
    exports: [
        QualifyingFormComponent
      ]
})
export class QualifyingFormModule { }
