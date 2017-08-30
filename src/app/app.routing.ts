import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

/* default home page layput. */
import { HomeComponent } from './home/home.component';

/*Auth Module. */
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { ActiveRouteGuard } from './auth/services/activate-route-guard';
import { DeactiveRouteGuard } from './auth/services/deactivate-route-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },  
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'aboutus',
                loadChildren: './aboutus/aboutus.module#AboutusModule'
            },
            {
                path: 'trainors',
                loadChildren: './trainor/trainor.module#TrainorModule'
            },
            {
                path: 'category',
                loadChildren: './category/category.module#CategoryModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            },
            {
                path: 'login',
                loadChildren: './auth/login/login.module#LoginModule'
            },
            {
                path: 'register',
                loadChildren: './auth/register/register.module#RegisterModule'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            
            {
                path: 'cart',
                loadChildren: './cart/cart.module#CartModule',
            },
           
            {

                path: 'external',
                loadChildren: './external/external.module#ExternalModule',
            },
            {
                path: 'forgotpassword',
                loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordModule',
            },
            {
                path: 'resetpassword/:id',
                loadChildren: './auth/reset-password/reset-password.module#ResetPasswordModule',

            },
        ]
    }/*,
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    }*/

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
