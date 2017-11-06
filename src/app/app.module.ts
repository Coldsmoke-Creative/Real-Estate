import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatToolbarModule, MatSelectModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ScrapComponent } from './components/scrap/scrap.component';
import { KeysPipe } from './pipes/keys.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: ScrapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ScrapComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
