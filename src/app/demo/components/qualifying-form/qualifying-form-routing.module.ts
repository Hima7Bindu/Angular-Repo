import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QualifyingFormComponent } from './qualifying-form.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: QualifyingFormComponent}
    ])],
    exports: [RouterModule]
})
export class QualifyingFormRoutingModule { }