import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {ProfileComponent} from './profile/profile.component';

import 'hammerjs';
import {LandingComponent} from './landing/landing.component';
import {RouterModule, Routes} from '@angular/router';
import {GithubComponent} from './github/github.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule, NgForOf} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SmacksComponent} from './smacks/smacks.component';
import {SmacksPostComponent} from './smacks-post/smacks-post.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'github', component: GithubComponent},
  { path: 'smacks', component: SmacksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    GithubComponent,
    SmacksComponent,
    SmacksPostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
