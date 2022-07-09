import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { TakeOrdersComponent } from './components/waiter-view/take-orders/take-orders.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ChefViewComponent } from './components/chef/chef-view/chef-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodListComponent } from './components/waiter-view/food-list/food-list.component';
import { OrderListComponent } from './components/waiter-view/order-list/order-list.component';
import { NavbarLateralComponent } from './components/waiter-view/navbar-lateral/navbar-lateral/navbar-lateral.component';
import { NavbarChefComponent } from './components/chef/navbar-chef/navbar-chef.component';
import { OrdersComponent } from './components/chef/orders/orders.component';
import { ModalComponent } from './components/chef/modal/modal.component';
import { CdTimerModule } from 'angular-cd-timer';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    TakeOrdersComponent,
    ChefViewComponent,
    FoodListComponent,
    OrderListComponent,
    NavbarLateralComponent,
    NavbarChefComponent,
    OrdersComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    CdTimerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }