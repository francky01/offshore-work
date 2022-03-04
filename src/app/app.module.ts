import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar'
import { DockModule } from 'primeng/dock'
import { ToastModule } from 'primeng/toast'
import { DialogModule } from 'primeng/dialog'
import { GalleriaModule } from 'primeng/galleria'
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ToastModule,
    DialogModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    DockModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
