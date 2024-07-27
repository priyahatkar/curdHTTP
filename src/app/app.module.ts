import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shard/component/dashboard/dashboard.component';
import { PostFormComponent } from './shard/component/post-form/post-form.component';
import { PostCardComponent } from './shard/component/post-card/post-card.component';
import { materialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConforimDeleteComponent } from './shard/component/conforim-delete/conforim-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostFormComponent,
    PostCardComponent,
    ConforimDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
