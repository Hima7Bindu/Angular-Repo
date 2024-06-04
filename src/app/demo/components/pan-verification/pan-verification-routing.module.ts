import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanVerificationComponent } from './pan-verification.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PanVerificationComponent}
    ])],
    exports: [RouterModule]
})
export class PanVerificationRoutingModule { }
