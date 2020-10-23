import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';

import { BlogPage } from './blog.page';
import { TimeagoComponent } from '../../helpers/timeago/timeago.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule
  ],
  declarations: [BlogPage, TimeagoComponent]
})
export class BlogPageModule { }
