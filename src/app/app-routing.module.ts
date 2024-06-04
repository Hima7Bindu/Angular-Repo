import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirect to the landing page
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'login', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule) }, // Add login route
            { path: 'register', loadChildren: () => import('./demo/components/auth/register/register.module').then(m => m.RegisterModule) }, // Add signup route
            { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)},
            { path: 'pan-verification', loadChildren:() =>import('./demo/components/pan-verification/pan-verification.module').then(m=> m.PanVerificationModule)},
            { path: 'employee-type',loadChildren: () => import('./demo/components/employeetype/employeetype.module').then(m => m.EmployeetypeModule)},
            { path: 'qualifying-form',loadChildren: () => import('./demo/components/qualifying-form/qualifying-form.module').then(m => m.QualifyingFormModule)},

            { path: '**', redirectTo: '/login' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}