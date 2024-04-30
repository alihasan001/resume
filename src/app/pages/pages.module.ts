import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ContactComponent } from './contact/contact.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    NzProgressModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzTagModule,
    NzCardModule
  ]
})
export class PagesModule { }

export const pagesRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio', component: PortfolioComponent}
]