import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialStylesModule} from "./material-styles/material-styles.module";
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './component/header/header.component';
import { BarListComponent } from './pages/bar-list/bar-list.component';
import { MenuComponent } from './pages/bar-list/menu/menu.component';
import { HistoryOrderComponent } from './pages/history-order/history-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    PageNotFoundComponent,
    HeaderComponent,
    BarListComponent,
    MenuComponent,
    HistoryOrderComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialStylesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
