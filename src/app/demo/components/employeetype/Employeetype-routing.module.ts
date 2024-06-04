import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeetypeComponent } from './employeetype.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmployeetypeComponent }
    ])],
    exports: [RouterModule]
})
export class EmployeetypeRoutingModule { }
